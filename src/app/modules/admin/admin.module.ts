import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { RolesComponent } from './roles/roles.component';
import { AssignRightComponent } from './assign-right/assign-right.component';
import { CampaignComponent } from './campaign/campaign.component';

import { DispostionComponent } from './dispostion/dispostion.component';
import { DispostionDetailsComponent } from './dispostion-details/dispostion-details.component';
import { LeadListComponent } from './lead-list/lead-list.component';
import { LeadListDetailsComponent } from './lead-list-details/lead-list-details.component';
import { DialingFilterComponent } from './dialing-filter/dialing-filter.component';
import { AgentScriptComponent } from './agent-script/agent-script.component';
import { GroupListComponent } from './inbound/group-list/group-list.component';
import { DidListComponent } from './inbound/did-list/did-list.component';
import { CallMenuListComponent } from './inbound/call-menu-list/call-menu-list.component';
import { UserGroupComponent } from './user-group/user-group.component';
import { CallShiftTimeComponent } from './call-shift-time/call-shift-time.component';
import { CallTimezoneComponent } from './call-timezone/call-timezone.component';
import { TemplateListComponent } from './template/template-list/template-list.component';
import { TemplateListDetailsComponent } from './template/template-list-details/template-list-details.component';
import { CarriersComponent } from './carriers/carriers.component';
import { CarriersDetailsComponent } from './carriers-details/carriers-details.component';
import { ServerConfigureComponent } from './server-configure/server-configure.component';
import { ServerConfigureDetailsComponent } from './server-configure-details/server-configure-details.component';
import { AdminLogsComponent } from './setting/admin-logs/admin-logs.component';
import { SmtpSettingsComponent } from './setting/smtp-settings/smtp-settings.component';
import { DialerSettingComponent } from './webrtc/dialer-setting/dialer-setting.component';
import { AudiofileListComponent } from './audio-files/audiofile-list/audiofile-list.component';
import { AudiofileListDetailsComponent } from './audio-files/audiofile-list-details/audiofile-list-details.component';
import { ContactMgtComponent } from './contact-module/contact-mgt/contact-mgt.component';
import { ContactMgtDetailsComponent } from './contact-module/contact-mgt-details/contact-mgt-details.component';
import { CaseListComponent } from './contact-module/case-list/case-list.component';
import { CaseDeatilsComponent } from './contact-module/case-deatils/case-deatils.component';
import { SlaConfigurationComponent } from './contact-module/sla-configuration/sla-configuration.component';
import { CaseTypeComponent } from './contact-module/master/case-type/case-type.component';
import { CaseTypeDeatilsComponent } from './contact-module/master/case-type-deatils/case-type-deatils.component';
import { CaseCategoryComponent } from './contact-module/master/case-category/case-category.component';
import { CaseCategoryDeatilsComponent } from './contact-module/master/case-category-deatils/case-category-deatils.component';
import { CaseSubCategoryComponent } from './contact-module/master/case-sub-category/case-sub-category.component';
import { CaseSubCategoryDeatilsComponent } from './contact-module/master/case-sub-category-deatils/case-sub-category-deatils.component';
import { CaseStatusMasterComponent } from './contact-module/master/case-status-master/case-status-master.component';
import { CustomReportComponent } from './contact-module/report/custom-report/custom-report.component';
import { EmailIntregationComponent } from './ommi-channel/email-intregation/email-intregation.component';
import { SmsIntregationComponent } from './ommi-channel/sms-intregation/sms-intregation.component';
import { WhatsupIntregationComponent } from './ommi-channel/whatsup-intregation/whatsup-intregation.component';
import { FacebookIntregationComponent } from './ommi-channel/facebook-intregation/facebook-intregation.component';
import { WebsiteIntregationComponent } from './ommi-channel/website-intregation/website-intregation.component';
import { ChatIntregationComponent } from './ommi-channel/chat-intregation/chat-intregation.component';
import { VideoChatIntregationComponent } from './ommi-channel/video-chat-intregation/video-chat-intregation.component';
import { CampaignSummaryComponent } from './report/campaign-summary/campaign-summary.component';
import { AdminlayoutComponent } from './shared/adminlayout.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MainHeaderComponent } from './shared/main-header/main-header.component';
import { MainSidebarComponent } from './shared/main-sidebar/main-sidebar.component';
import { ContentWrapperComponent } from './shared/content-wrapper/content-wrapper.component';
import { ControlSidebarComponent } from './shared/control-sidebar/control-sidebar.component';
import { MainFooterComponent } from './shared/main-footer/main-footer.component';
import { RouterModule } from '@angular/router';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ProfileComponent } from './profile/profile.component';
import { DataTablesModule } from 'angular-datatables';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { AddPhoneComponent } from './user/add-phone/add-phone.component';
import { EditPhoneComponent } from './user/edit-phone/edit-phone.component';
import { AgentLogComponent } from './user/agent-log/agent-log.component';
import { AgentLogInboundComponent } from './user/agent-log-inbound/agent-log-inbound.component';
import { AgentLogOutboundComponent } from './user/agent-log-outbound/agent-log-outbound.component';
import { AgentLogoutComponent } from './user/agent-logout/agent-logout.component';
import { AddCampaignComponent } from './campaign/add-campaign/add-campaign.component';
import { EditCampaignComponent } from './campaign/edit-campaign/edit-campaign.component';
import { AddDispostionComponent } from './dispostion/add-dispostion/add-dispostion.component';
import { EditDispostionComponent } from './dispostion/edit-dispostion/edit-dispostion.component';
import { AddScriptComponent } from './agent-script/add-script/add-script.component';
import { EditScriptComponent } from './agent-script/edit-script/edit-script.component';
import { AddListComponent } from './lead-list/add-list/add-list.component';
import { EditListComponent } from './lead-list/edit-list/edit-list.component';
import { AddDncComponent } from './lead-list/add-dnc/add-dnc.component';
import { AddNewLeadComponent } from './lead-list/add-new-lead/add-new-lead.component';
import { UploadLeadComponent } from './lead-list/upload-lead/upload-lead.component';
import { AddFilterComponent } from './dialing-filter/add-filter/add-filter.component';
import { EditFilterComponent } from './dialing-filter/edit-filter/edit-filter.component';



@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    UserComponent,
    RolesComponent,
    AssignRightComponent,
    CampaignComponent,

    DispostionComponent,
    DispostionDetailsComponent,
    LeadListComponent,
    LeadListDetailsComponent,
    DialingFilterComponent,
    AgentScriptComponent,
    GroupListComponent,
    DidListComponent,
    CallMenuListComponent,
    UserGroupComponent,
    CallShiftTimeComponent,
    CallTimezoneComponent,
    TemplateListComponent,
    TemplateListDetailsComponent,
    CarriersComponent,
    CarriersDetailsComponent,
    ServerConfigureComponent,
    ServerConfigureDetailsComponent,
    AdminLogsComponent,
    SmtpSettingsComponent,
    DialerSettingComponent,
    AudiofileListComponent,
    AudiofileListDetailsComponent,
    ContactMgtComponent,
    ContactMgtDetailsComponent,
    CaseListComponent,
    CaseDeatilsComponent,
    SlaConfigurationComponent,
    CaseTypeComponent,
    CaseTypeDeatilsComponent,
    CaseCategoryComponent,
    CaseCategoryDeatilsComponent,
    CaseSubCategoryComponent,
    CaseSubCategoryDeatilsComponent,
    CaseStatusMasterComponent,
    CustomReportComponent,
    EmailIntregationComponent,
    SmsIntregationComponent,
    WhatsupIntregationComponent,
    FacebookIntregationComponent,
    WebsiteIntregationComponent,
    ChatIntregationComponent,
    VideoChatIntregationComponent,
    CampaignSummaryComponent,
    AdminlayoutComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    ContentWrapperComponent,
    ControlSidebarComponent,
    MainFooterComponent,
    ChangepasswordComponent,
    ProfileComponent,
    AddUserComponent,
    EditUserComponent,
    AddPhoneComponent,
    EditPhoneComponent,
    AgentLogComponent,
    AgentLogInboundComponent,
    AgentLogOutboundComponent,
    AgentLogoutComponent,
    AddCampaignComponent,
    EditCampaignComponent,
    AddDispostionComponent,
    EditDispostionComponent,
    AddScriptComponent,
    EditScriptComponent,
    AddListComponent,
    EditListComponent,
    AddDncComponent,
    AddNewLeadComponent,
    UploadLeadComponent,
    AddFilterComponent,
    EditFilterComponent,
    
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    RouterModule,
    DataTablesModule

  ]
})
export class AdminModule { }
