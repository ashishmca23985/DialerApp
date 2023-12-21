import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  returnUrl: string | undefined;
  error: string | undefined;

  constructor(private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {
    this.userForm = fb.group({
      username: [null, [Validators.required, Validators.required]],
      password: [null, [Validators.required]]
    })
  }
  LoginUser() {
    if (this.userForm.valid) {
      this.authService.ValidateUser(this.userForm.value).subscribe(res => {
        if (res.body != null) {
          const user: User = res.body;
          this.authService.SetAuthUser(user);
          if (this.returnUrl != undefined) {
            this.router.navigateByUrl(this.returnUrl);
          }
          else if (user.roles.find(r => r == 'Admin') == 'Admin') {
            this.router.navigate(['/admin']);
          }
          else if (user.roles.find(r => r == 'Supervisor') == 'supervisor') {
            this.router.navigate(['/supervisor']);
          }
          else if (user.roles.find(r => r == 'User') == 'User') {
            this.router.navigate(['/user']);
          }
        }
        else {
          this.error = 'Username or Password is Invalid!';
        }
      })
    }
  }
  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || undefined;
  }

}
