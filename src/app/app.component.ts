import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from './../environments/environment';
import { AuthenticationService } from './services/authenticate.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = "App Component"
  apiUrl : string = "";


  public constructor(
    private titleService : Title,
    private authenticate: AuthenticationService
    ){
    this.apiUrl = environment.apiUrl;
  }
  
  public setTitle (newTitle: string) {
    this.titleService.setTitle(newTitle)
  }

  displayDashboard() {
    return this.authenticate.isUserLoggedIn();
  }
  displayPreLoginHeader() {
    return this.authenticate.isUserLoggedIn();
  }
  
}
 
