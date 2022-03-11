import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { UserLoginComponent } from './login/user-login/user-login/user-login.component';
import { UserRegistrationComponent } from './login/user-registration/user-registration/user-registration.component';

const routes: Routes = [

  {path:'', component:EventListComponent},
  {path:'login', component:UserLoginComponent},
  {path:'register', component:UserRegistrationComponent},
  {path:'**', component:EventListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
