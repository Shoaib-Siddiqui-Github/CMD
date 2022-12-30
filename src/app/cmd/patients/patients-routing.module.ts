import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientInfoComponent } from './components/patient-info/patient-info.component';
import { ViewAllPatientComponent } from './components/view-all-patient/view-all-patient.component';
import {FeedbackComponent} from './components/feedback/feedback.component';
import { AddEditSymptonHistoryComponent } from './components/patient-info/components/view-symptons-history/components/add-edit-sympton-history/add-edit-sympton-history.component';
import { AppointmentSchudleComponent } from '../appointments/component/add-appointment/components/appointment-schudle/appointment-schudle.component';

const routes: Routes = [
  {path:'view',component:ViewAllPatientComponent},
  {path:'info',component:PatientInfoComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'addSymptom',component:AddEditSymptonHistoryComponent},
  { path: 'bookAppointment', component: AppointmentSchudleComponent }, 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
