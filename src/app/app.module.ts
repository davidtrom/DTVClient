import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportAConcernComponent } from './clientView/components/report-a-concern/report-a-concern.component';
import { ReportedConcernsDisplayComponent } from './clientView/components/reported-concerns-display/reported-concerns-display.component';
import { CommunicationService } from './services/communication.service';
import { RegisterUserComponent } from './clientView/components/register-user/register-user.component';
import { LoginComponent } from './adminView/components/login/login.component';
import { FooterComponent } from './clientView/layout/footer/footer.component';
import { HomeViewComponent } from './clientView/home-view/home-view.component';
import { HeaderComponent } from './clientView/layout/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    ReportAConcernComponent,
    ReportedConcernsDisplayComponent,
    RegisterUserComponent,
    LoginComponent,
    FooterComponent,
    HomeViewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
