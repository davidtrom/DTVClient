import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportAConcernComponent } from './clientView/components/report-a-concern/report-a-concern.component';
import { ReportedConcernsDisplayComponent } from './clientView/components/reported-concerns-display/reported-concerns-display.component';
import { RegisterUserComponent } from './clientView/components/register-user/register-user.component';
import { LoginComponent } from './adminView/components/login/login.component';
import { FooterComponent } from './clientView/layout/footer/footer.component';
import { HeaderComponent } from './clientView/layout/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RequestAmbassadorComponent } from './clientView/components/request-ambassador/request-ambassador.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { AdminRegisterComponent } from './adminView/components/admin-register/admin-register.component';


@NgModule({
  declarations: [
    AppComponent,
    ReportAConcernComponent,
    ReportedConcernsDisplayComponent,
    RegisterUserComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    RequestAmbassadorComponent,
    AdminRegisterComponent,
    RequestAmbassadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
