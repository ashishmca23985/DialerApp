import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { SupervisorlayoutComponent } from './shared/supervisorlayout.component';
import { RouterModule } from '@angular/router';
import { SupervisorRoutingModule } from './supervisor-routing.module';



@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    SupervisorlayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SupervisorRoutingModule
  ]
})
export class SupervisorModule { }
