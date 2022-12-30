import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingDashboardComponent } from './components/setting-dashboard/setting-dashboard.component';
import { ViewAvailibiltySettingComponent } from './components/view-availibilty-setting/view-availibilty-setting.component';
//import { ViewAvailibiltySettingComponent } from './components/view-availibilty-setting/view-availibilty-setting.component';

// import { ViewEditAccountSettingComponent } from './components/view-edit-account-setting/view-edit-account-setting.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ViewEditAccountSettingComponent } from './components/view-edit-account-setting/view-edit-account-setting.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { TopHeaderComponent } from 'src/app/shared/components/top-header/top-header.component';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';


@NgModule({
  declarations: [
    SettingDashboardComponent,
    ViewAvailibiltySettingComponent,
    ProfileSettingsComponent,
    // ViewEditAccountSettingComponent

    ViewEditAccountSettingComponent,

 
  ],

  imports: [
    CommonModule,
    SettingsRoutingModule,
    FontAwesomeModule,
    SharedModule,
  ]
})
export class SettingsModule { }
