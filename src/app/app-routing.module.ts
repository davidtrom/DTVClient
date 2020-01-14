import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from 'src/app/clientView/components/register-user/register-user.component';
import { LoginComponent } from 'src/app/adminView/components/login/login.component';
import { HomeViewComponent } from './clientView/home-view/home-view.component';


const routes: Routes = [
  { path: '', component: HomeViewComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterUserComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
