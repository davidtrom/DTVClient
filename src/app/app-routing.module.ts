import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { RegisterUserComponent } from 'src/components/register-user/register-user.component';
import { LoginComponent } from 'src/components/login/login.component';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', component: AppComponent },
=======
import { RegisterUserComponent } from 'src/app/clientView/components/register-user/register-user.component';
import { LoginComponent } from 'src/app/adminView/components/login/login.component';
import { HomeViewComponent } from './clientView/home-view/home-view.component';


const routes: Routes = [
  { path: '', component: HomeViewComponent},
  { path: 'login', component: LoginComponent},
>>>>>>> ba365c65299498aed0299da0f0f1a8197ef3cd65
  { path: 'register', component: RegisterUserComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
