import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UserLayoutComponent } from './shared/user-layout.component';
import { UserRoutingModule } from './user-routing.module';
import { MainHeaderComponent } from './shared/main-header/main-header.component';
import { MainSidebarComponent } from './shared/main-sidebar/main-sidebar.component';
import { ContentWrapperComponent } from './shared/content-wrapper/content-wrapper.component';
import { ControlSidebarComponent } from './shared/control-sidebar/control-sidebar.component';
import { MainFooterComponent } from './shared/main-footer/main-footer.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { HomeComponent } from './home/home.component';
import { ScriptComponent } from './script/script.component';
import { DefaultcrmComponent } from './defaultcrm/defaultcrm.component';
import { WebformComponent } from './customcrm/webform/webform.component';
import { ClientcrmComponent } from './customcrm/clientcrm/clientcrm.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CtipanelComponent } from './ctipanel/ctipanel.component';
import { DatePipe } from '@angular/common';
import { SmsComponent } from './sms/sms.component';
import { EmailComponent } from './email/email.component';
import { WhatsupComponent } from './whatsup/whatsup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DialercalllogComponent } from './report/dialercalllog/dialercalllog.component';
import { ManualcalllogComponent } from './report/manualcalllog/manualcalllog.component';


@NgModule({
  declarations: [
    UserLayoutComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    ContentWrapperComponent,
    ControlSidebarComponent,
    MainFooterComponent,
    ProfileComponent,
    ChangepasswordComponent,
    HomeComponent,
    ScriptComponent,
    DefaultcrmComponent,
    WebformComponent,
    ClientcrmComponent,
    ContactComponent,
    CtipanelComponent,
    SmsComponent,
    EmailComponent,
    WhatsupComponent,
    DashboardComponent,
    DialercalllogComponent,
    ManualcalllogComponent,
  
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
