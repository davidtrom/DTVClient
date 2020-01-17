import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from 'src/app/clientView/components/register-user/register-user.component';
import { LoginComponent } from 'src/app/adminView/components/login/login.component';
import { ReportedConcernsDisplayComponent } from './clientView/components/reported-concerns-display/reported-concerns-display.component';
import { ReportAConcernComponent } from './clientView/components/report-a-concern/report-a-concern.component';
import { AdminRegisterComponent } from './adminView/components/admin-register/admin-register.component';
import { LiveFeedComponent } from './adminView/components/live-feed/live-feed.component';

const routes: Routes = [
  { path: 'admin/login', component: LoginComponent},
  { path: 'admin/register', component: AdminRegisterComponent},
  { path: 'admin/logged-in', component: LiveFeedComponent},
  { path: 'register', component: RegisterUserComponent},
  { path: 'reports-display', component: ReportedConcernsDisplayComponent},
  { path: 'create-report', component: ReportAConcernComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
