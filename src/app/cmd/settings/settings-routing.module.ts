import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingDashboardComponent } from './components/setting-dashboard/setting-dashboard.component';
import { ViewAvailibiltySettingComponent } from './components/view-availibilty-setting/view-availibilty-setting.component';
import { ViewEditAccountSettingComponent } from './components/view-edit-account-setting/view-edit-account-setting.component';
import {ProfileSettingsComponent} from './components/profile-settings/profile-settings.component'

const routes: Routes = [
  {path:'setting',component:SettingDashboardComponent},
  {path:'editProfile',component:ViewEditAccountSettingComponent},
  {path:'addAvailability',component: ViewAvailibiltySettingComponent},
  {path:'profileSettings',component:ProfileSettingsComponent}
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }