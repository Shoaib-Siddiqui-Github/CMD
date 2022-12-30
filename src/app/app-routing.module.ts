import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingScreenComponent } from './shared/components/landing-screen/landing-screen.component';
import { ViewFeedbackComponent } from './cmd/appointments/component/view-feedback/view-feedback.component';
import { ViewAllAppointmentComponent } from './cmd/appointments/component/view-all-appointment/view-all-appointment.component';
import { ViewEditAccountSettingComponent } from './cmd/settings/components/view-edit-account-setting/view-edit-account-setting.component';
import { ViewAllPatientComponent } from './cmd/patients/components/view-all-patient/view-all-patient.component';
import { DashboardComponent } from './cmd/dashboard/component/dashboard/dashboard.component';
import { ViewPatientsAppoinmentsComponent } from './cmd/patients/components/view-patients-appoinments/view-patients-appoinments.component';
import { ViewAppointmentComponent } from './cmd/appointments/component/view-appointment/view-appointment.component';
import { FeedbackComponent } from './cmd/patients/components/feedback/feedback.component';
import { AddAppointmentComponent } from './cmd/appointments/component/add-appointment/add-appointment.component';
import { ViewAvailibiltySettingComponent } from './cmd/settings/components/view-availibilty-setting/view-availibilty-setting.component';
import { AppointmentConfirmationComponent } from './cmd/appointments/component/add-appointment/components/appointment-confirmation/appointment-confirmation.component';
import { AppointmentSchudleComponent } from './cmd/appointments/component/add-appointment/components/appointment-schudle/appointment-schudle.component';
import { RegisterComponent } from './component/register/register.component';
//import { LoginComponent } from './component/login/login.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { VarifyEmailComponent } from './component/varify-email/varify-email.component';
import { SettingDashboardComponent } from './cmd/settings/components/setting-dashboard/setting-dashboard.component';
import { ViewChatComponent } from './cmd/chat/components/view-chat/view-chat.component';
import { ViewSuggestPrescriptionComponent } from './cmd/chats/components/view-suggest-prescription/view-suggest-prescription.component';
import { VideocallComponent } from './cmd/chats/components/videocall/videocall.component';
import { ViewAllChatDetailsComponent } from './cmd/chats/components/view-all-chat-details/view-all-chat-details.component';
import { ViewissueshistoryComponent } from './cmd/chats/components/viewissueshistory/viewissueshistory.component';
import { AddFollowUpComponent } from './cmd/chats/components/add-follow-up/add-follow-up.component';
import { ViewHistoryComponent } from './cmd/chats/components/view-history/view-history.component';
import { AudiocallComponent } from './cmd/chats/components/audiocall/audiocall.component';
import { ViewvitalsComponent } from './cmd/chats/components/viewvitals/viewvitals.component';
import { ViewPrescriptionHistoryComponent } from './cmd/chats/components/view-prescription-history/view-prescription-history.component';

import { PatientComponent } from './patient/patient.component';
import { PatientloginComponent } from './patient/patientlogin/patientlogin.component';
import { PatientdashboardComponent } from './patient/patientdashboard/patientdashboard.component';
import { PatietregisterComponent } from './patient/patietregister/patietregister.component';
import { DoctorProfileComponent } from './patient/doctor-profile/doctor-profile.component';
import { CheckoutComponent } from './patient/checkout/checkout.component';
import { BookingsuccessComponent } from './patient/bookingsuccess/bookingsuccess.component';
import { BookingComponent } from './patient/booking/booking.component';
import { HeaderComponent } from './patient/header/header.component';
import { PatientsettingComponent } from './patient/patientsetting/patientsetting.component';
import { ChatComponent } from './patient/chat/chat.component';
import { ChangepassComponent } from './patient/changepass/changepass.component';
import { DoctorsComponent } from './patient/doctors/doctors.component';
import { MapgridComponent } from './patient/doctors/mapgrid/mapgrid.component';
import { MaplistComponent } from './patient/doctors/maplist/maplist.component';
import { PrescriptionComponent } from './patient/prescription/prescription.component';
import { BillingComponent } from './patient/billing/billing.component';
import { MedicalreportsComponent } from './patient/medicalreports/medicalreports.component';

// import { ViewChatComponent } from './cmd/chats/components/view-chat/view-chat.component';



const routes: Routes = [

  { path: '', component: DashboardComponent },

  {
    path: 'chat',
    component: ViewSuggestPrescriptionComponent,
  },


  { path: 'videocall', component: VideocallComponent },

  { path: 'viewallchat', component: ViewAllChatDetailsComponent },

  { path: 'viewissueshistory', component: ViewissueshistoryComponent },

  { path: 'addfollowups', component: AddFollowUpComponent },

  { path: 'viewhistory', component: ViewHistoryComponent },

  { path: 'audiocall', component: AudiocallComponent },

  {
    path: 'viewsuggestprescription',
    component: ViewSuggestPrescriptionComponent,
  },

  { path: 'viewvitals', component: ViewvitalsComponent },

  { path: 'viewchat', component: ViewChatComponent },

  { path: 'viewchats', component: ViewPrescriptionHistoryComponent },


  { path: 'fb', component: ViewFeedbackComponent },
  //{ path: 'log', component: LoginComponent },
  { path: 'viewallappointments', component: ViewAllAppointmentComponent },
  { path: ' addAppointment', component: AddAppointmentComponent },
  { path: ' appointmentConform', component: AppointmentConfirmationComponent },
  { path: ' bookAppointment', component: AppointmentSchudleComponent },
  // { path: 'login', component: LoginComponent },
  { path: 'setting', component: SettingDashboardComponent },
  { path: 'bookAppointment', component: AppointmentSchudleComponent },
  // { path: 'settings', component: ViewEditAccountSettingComponent },
  { path: 'addAvailability', component: ViewAvailibiltySettingComponent },
  { path: 'patient', component: ViewAllPatientComponent },
  { path: 'viewpatientsapp', component: ViewPatientsAppoinmentsComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'varify-email', component: VarifyEmailComponent },
  { path: 'viewappointment', component: ViewAppointmentComponent },
  { path: 'landing', component: LandingScreenComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'Patient', component: PatientComponent },
  { path: 'patientlogin', component: PatientloginComponent },


  { path: 'register', component: RegisterComponent },
  { path: '', component: LandingScreenComponent, pathMatch: 'full' },
  { path: 'CMD', loadChildren: () => import('./cmd/cmd.module').then((m) => m.CmdModule) },
  //{ path: 'allappointments', loadChildren: () => import('./cmd/appointments/appointments.module').then((m) => m.AppointmentsModule )},

  { path: 'settings', loadChildren: () => import('./cmd/settings/settings.module').then((m) => m.SettingsModule) },
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'editProfile', component: ViewEditAccountSettingComponent },
  { path: 'patientdashboard', component: PatientdashboardComponent },
  { path: 'patientregister', component: PatietregisterComponent },
  { path: 'doctorprofile', component: DoctorProfileComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'bookingsuccess', component: BookingsuccessComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'header', component: HeaderComponent },
 {path:'chat',component:ChatComponent},
 {path:'profilesetting',component:PatientsettingComponent},
{path:'changepass',component:ChangepassComponent},
{path:'doctors1',component:DoctorsComponent},
{path:'mapgrid',component:MapgridComponent},
{path:'maplist',component:MaplistComponent},
{path:'prescription',component:PrescriptionComponent},
{path:'billing',component:BillingComponent},
{path:'reports',component:MedicalreportsComponent}




];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export const routingComponents = [ViewFeedbackComponent];
