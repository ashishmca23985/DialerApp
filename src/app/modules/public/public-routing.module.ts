import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UnauthorizeComponent } from './unauthorize/unauthorize.component';
import { PubliclayoutComponent } from './shared/publiclayout.component';
import { ChangepasswordComponent } from '../user/changepassword/changepassword.component';
import { ProfileComponent } from '../user/profile/profile.component';

const routes: Routes = [
    {
        path: '', component: PubliclayoutComponent, children: [
            { path: '', component: HomeComponent },
            { path: 'login', component: LoginComponent },
            { path: 'password', component: ChangepasswordComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'unauthorize', component: UnauthorizeComponent },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicRoutingModule { }
