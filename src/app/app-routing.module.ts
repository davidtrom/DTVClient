import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from 'src/app/clientView/components/register-user/register-user.component';
import { LoginComponent } from 'src/app/adminView/components/login/login.component';
import { HomeViewComponent } from './clientView/home-view/home-view.component';
import { ReportedConcernsDisplayComponent } from './clientView/components/reported-concerns-display/reported-concerns-display.component';
import { ReportAConcernComponent } from './clientView/components/report-a-concern/report-a-concern.component';
import { AmbassadorRequestComponent } from './clientView/components/ambassador-request/ambassador-request.component';


const routes: Routes = [
  { path: '', component: HomeViewComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterUserComponent},
  { path: 'reports-display', component: ReportedConcernsDisplayComponent},
  { path: 'create-report', component: ReportAConcernComponent},
  { path: 'ambassador-request', component: AmbassadorRequestComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
