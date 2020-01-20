import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from './../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = "App Component"
  apiUrl : string = "";


  public constructor(private titleService : Title){
    this.apiUrl = environment.apiUrl;
  }
  
  public setTitle (newTitle: string) {
    this.titleService.setTitle(newTitle)
  }
  
}
 
