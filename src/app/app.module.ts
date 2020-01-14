import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportAConcernComponent } from '../components/report-a-concern/report-a-concern.component';
import { ReportedConcernsDisplayComponent } from '../components/reported-concerns-display/reported-concerns-display.component';
import { RegisterUserComponent } from '../components/register-user/register-user.component';
import { LoginComponent } from '../components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ReportAConcernComponent,
    ReportedConcernsDisplayComponent,
    RegisterUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
