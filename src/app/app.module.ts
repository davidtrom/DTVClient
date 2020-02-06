import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { WorkOrderService } from './services/work-order.service';
import { AdminRegisterComponent } from './adminView/components/admin-register/admin-register.component';
import { ClientHomeComponent } from './clientView/components/client-home/client-home.component';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { LiveFeedComponent } from './adminView/components/live-feed/live-feed.component';
import { WebsocketService } from './services/websocket.service';
import { RequestAmbassadorDisplayComponent } from './clientView/components/request-ambassador-display/request-ambassador-display.component';
import { AdminDashboardComponent } from './clientView/layout/admin-dashboard/admin-dashboard.component';
import { FileInputValueAccessorDirective } from './directives/file-input-value-accessor.directive';
import { AdminHomeComponent } from './adminView/components/admin-home/admin-home.component';
import { ClosedRequestsComponent } from './closed-requests/closed-requests.component';
import { ClosedReportsComponent } from './closed-reports/closed-reports.component';


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
    RequestAmbassadorComponent,
    ClientHomeComponent,
    LiveFeedComponent,
    RequestAmbassadorDisplayComponent,
    AdminDashboardComponent,
    FileInputValueAccessorDirective,
    AdminHomeComponent,
    ClosedRequestsComponent,
    ClosedReportsComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],

  providers: [
    UserService, 
    WorkOrderService, 
    WebsocketService, 
    RequestAmbassadorDisplayComponent,
    ReportedConcernsDisplayComponent,
    { provide: HTTP_INTERCEPTORS, useClass:HttpInterceptorService, multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
