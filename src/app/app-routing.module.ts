import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from 'src/components/register-user/register-user.component';
import { LoginComponent } from 'src/components/login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
