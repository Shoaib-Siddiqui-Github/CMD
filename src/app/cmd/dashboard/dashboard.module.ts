import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AddAppointmentComponent } from '../appointments/component/add-appointment/add-appointment.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AddAppointmentComponent
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
