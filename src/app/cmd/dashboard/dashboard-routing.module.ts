import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAppointmentComponent } from '../appointments/component/add-appointment/add-appointment.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'Dashboard', component: DashboardComponent },
  {path:'appointment/addAppointment',component:AddAppointmentComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
