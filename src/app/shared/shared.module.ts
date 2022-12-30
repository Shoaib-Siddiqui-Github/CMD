import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { SharedRoutingModule } from './shared-routing.module';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LandingScreenComponent } from './components/landing-screen/landing-screen.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    TopHeaderComponent,
    SidebarComponent,
  
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedRoutingModule,
    MatDialogModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    
    
  ],
  exports:[
    SidebarComponent,
    TopHeaderComponent,
   
  ]
})
export class SharedModule { }
