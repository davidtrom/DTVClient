import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportAConcernComponent } from '../components/report-a-concern/report-a-concern.component';
import { ReportedConcernsDisplayComponent } from '../components/reported-concerns-display/reported-concerns-display.component';
import { CommunicationService } from './services/communication.service';
import { RegisterUserComponent } from './register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportAConcernComponent,
    ReportedConcernsDisplayComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
