import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ReportAConcernComponent } from '../components/report-a-concern/report-a-concern.component';
import { ReportedConcernsDisplayComponent } from '../components/reported-concerns-display/reported-concerns-display.component';
import { RegisterUserComponent } from '../components/register-user/register-user.component';
import { LoginComponent } from '../components/login/login.component';
=======
import { ReportAConcernComponent } from './clientView/components/report-a-concern/report-a-concern.component';
import { ReportedConcernsDisplayComponent } from './clientView/components/reported-concerns-display/reported-concerns-display.component';
import { CommunicationService } from './services/communication.service';
import { RegisterUserComponent } from './clientView/components/register-user/register-user.component';
import { LoginComponent } from './adminView/components/login/login.component';
import { FooterComponent } from './clientView/layout/footer/footer.component';
import { HomeViewComponent } from './clientView/home-view/home-view.component';
>>>>>>> ba365c65299498aed0299da0f0f1a8197ef3cd65


@NgModule({
  declarations: [
    AppComponent,
    ReportAConcernComponent,
    ReportedConcernsDisplayComponent,
    RegisterUserComponent,
    LoginComponent,
    FooterComponent,
    HomeViewComponent
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
