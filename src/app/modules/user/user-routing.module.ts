import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLayoutComponent } from './shared/user-layout.component';
import { DashboardComponent } from '../user/dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { HomeComponent } from './home/home.component';
import { DefaultcrmComponent } from './defaultcrm/defaultcrm.component';
import { ScriptComponent } from './script/script.component';
import { ClientcrmComponent } from './customcrm/clientcrm/clientcrm.component';
import { WebformComponent } from './customcrm/webform/webform.component';
import { ContactComponent } from './contact/contact.component';
import { SmsComponent } from './sms/sms.component';
import { EmailComponent } from './email/email.component';
import { WhatsupComponent } from './whatsup/whatsup.component';
import { ManualcalllogComponent } from './report/manualcalllog/manualcalllog.component';
import { DialercalllogComponent } from './report/dialercalllog/dialercalllog.component';

const routes: Routes = [
    {
        path: '', component: UserLayoutComponent, children: [
            { path: '', component: HomeComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'changepassword', component: ChangepasswordComponent },
            { path: 'defaultcrm', component: DefaultcrmComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'script', component: ScriptComponent },
            { path: 'custom/clientcrm', component: ClientcrmComponent },
            { path: 'custom/webform', component: WebformComponent },
            { path: 'sms', component: SmsComponent },
            { path: 'email', component: EmailComponent },
            { path: 'whatsup', component: WhatsupComponent },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'report/manualcalllog', component: ManualcalllogComponent },
            { path: 'report/dialercalllog', component: DialercalllogComponent },

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
