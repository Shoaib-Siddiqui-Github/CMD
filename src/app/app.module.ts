import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faCoffee, fas } from '@fortawesome/free-solid-svg-icons';
import { AppComponent } from './app.component';
import { ViewEditAccountSettingComponent } from './cmd/settings/components/view-edit-account-setting/view-edit-account-setting.component';
import { LandingScreenComponent } from './shared/components/landing-screen/landing-screen.component';
import { formService } from './shared/service';
import { AppRoutingModule } from './app-routing.module';
import { EditsymptomsComponent } from './editsymptoms/editsymptoms.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommentserviceService } from './cmd/appointments/Service/commentservice.service';
import { MatCardModule } from '@angular/material/card';
import { FeedbackComponent } from './cmd/patients/components/feedback/feedback.component';
import { ViewPatientsAppoinmentsComponent } from './cmd/patients/components/view-patients-appoinments/view-patients-appoinments.component';
import { FeedbackFormService } from './cmd/patients/services/feedbackform.service';
import { AngularFireModule } from "@angular/fire/compat"
import { environment } from 'src/environments/environment';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from './shared/shared.module';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { VarifyEmailComponent } from './component/varify-email/varify-email.component';
import { ViewPrescriptionHistoryComponent } from './cmd/chats/components/view-prescription-history/view-prescription-history.component';
import { ViewvitalsComponent } from './cmd/chats/components/viewvitals/viewvitals.component';
import { ViewissueshistoryComponent } from './cmd/chats/components/viewissueshistory/viewissueshistory.component';
import { VideocallComponent } from './cmd/chats/components/videocall/videocall.component';
import { AudiocallComponent } from './cmd/chats/components/audiocall/audiocall.component';
import { ViewIssuesHistoryComponent } from './cmd/chats/components/view-issues-history/view-issues-history.component';
import { ViewYourSchuduleComponent } from './cmd/chats/components/add-follow-up/components/view-your-schudule/view-your-schudule.component';
import { AddFollowUpComponent } from './cmd/chats/components/add-follow-up/add-follow-up.component';
import { PrescriptionDetailsComponent } from './cmd/chats/components/view-suggest-prescription/components/prescription-details/prescription-details.component';
import { AddPrescriptionComponent } from './cmd/chats/components/view-suggest-prescription/components/add-prescription/add-prescription.component';
import { ViewSuggestPrescriptionComponent } from './cmd/chats/components/view-suggest-prescription/view-suggest-prescription.component';
import { ViewHistoryComponent } from './cmd/chats/components/view-history/view-history.component';
import { ViewAllChatDetailsComponent } from './cmd/chats/components/view-all-chat-details/view-all-chat-details.component';
import { ChatDashboardComponent } from './cmd/chats/components/chat-dashboard/chat-dashboard.component';
import { ViewChatComponent } from './cmd/chats/components/view-chat/view-chat.component';
import { ChatModule } from './cmd/chats/chat.module';
import { PatientComponent } from './patient/patient.component';
import { PatientloginComponent } from './patient/patientlogin/patientlogin.component';
import { PatietregisterComponent } from './patient/patietregister/patietregister.component';
import { BookingComponent } from './patient/booking/booking.component';
import { BookingsuccessComponent } from './patient/bookingsuccess/bookingsuccess.component';
import { ChatComponent } from './patient/chat/chat.component';
import { CheckoutComponent } from './patient/checkout/checkout.component';
import { DoctorProfileComponent } from './patient/doctor-profile/doctor-profile.component';
import { DoctorsComponent } from './patient/doctors/doctors.component';
import { MapgridComponent } from './patient/doctors/mapgrid/mapgrid.component';
import { MaplistComponent } from './patient/doctors/maplist/maplist.component';
import { PatientdashboardComponent } from './patient/patientdashboard/patientdashboard.component';
import { HeaderComponent } from './patient/header/header.component';
import { PatientsettingComponent } from './patient/patientsetting/patientsetting.component';
import { ChangepassComponent } from './patient/changepass/changepass.component';

import { PrescriptionComponent } from './patient/prescription/prescription.component';
import { MedicalreportsComponent } from './patient/medicalreports/medicalreports.component';
import { BillingComponent } from './patient/billing/billing.component';

// import { ComponentsComponent } from './profile-settings/cmd/settings/components/components.component';
// import { Settings } from './profileSettings/settings.components/settings.components.component';


// const COMPONENT = [
//   ChatDashboardComponent,
//   ViewAllChatDetailsComponent,
//   ViewChatComponent,
//   ViewHistoryComponent,
//   ViewSuggestPrescriptionComponent,
//   AddPrescriptionComponent,
//   PrescriptionDetailsComponent,
//   AddFollowUpComponent,
//   ViewYourSchuduleComponent,
//   ViewIssuesHistoryComponent,
//   AudiocallComponent,
//   ViewPrescriptionHistoryComponent
// ];

@NgModule({
  declarations: [
    AppComponent,
    LandingScreenComponent,
    // ViewEditAccountSettingComponent,
    //AppRoutingModule, //see that not required
    //routingComponents,
    EditsymptomsComponent,
    FeedbackComponent,
    ViewPatientsAppoinmentsComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VarifyEmailComponent,
    PatientComponent,
    PatientloginComponent,
    PatietregisterComponent,
    BookingComponent,
    BookingsuccessComponent,
    ChatComponent,
    CheckoutComponent,
    DoctorProfileComponent,
    DoctorsComponent,
    MapgridComponent,
    MaplistComponent,
    PatientdashboardComponent,
    HeaderComponent,
    PatientsettingComponent,
    ChangepassComponent,

    PrescriptionComponent,
    MedicalreportsComponent,
    BillingComponent,


    // ComponentsComponent,
    // Settings.ComponentsComponent,
    // ...COMPONENT,
    // VideocallComponent,
    // ViewissueshistoryComponent,
    // ViewvitalsComponent,
    // ViewPrescriptionHistoryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    //RouterModule.forRoot,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,

    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    SharedModule,
    ChatModule,


    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [formService, HttpClient, CommentserviceService, FeedbackFormService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIcons(faCoffee);
  }
}
// FormsModule,BrowserAnimationsModule,
// HttpClientModule,MatSliderModule,MatCardModule,MatButtonModule,MatIconModule

//],



