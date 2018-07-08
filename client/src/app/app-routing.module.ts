import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CommunityComponent } from './community/community.component';


const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "profile", component: ProfileComponent },
  { path: "community/:group", component: CommunityComponent }
];  // { path: 'statistics', component: StatisticsComponent}



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],

  exports: [ RouterModule ]

})
export class AppRoutingModule { }
