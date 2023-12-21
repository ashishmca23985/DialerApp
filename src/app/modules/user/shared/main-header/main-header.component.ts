import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})

export class MainHeaderComponent implements OnInit {
  user: User | undefined;
  
  constructor(private authService: AuthService, private router: Router) {
    this.user = this.authService.user;
      
  }
    
  SignOut() {
    this.authService.RemoveAuthUser()
    this.user = undefined
    this.router.navigate(['/login'])
  }
  ngOnInit(): void {

   
  }

}
