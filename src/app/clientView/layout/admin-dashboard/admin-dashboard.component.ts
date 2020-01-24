import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  collapsed = true;
  constructor(
    private authenticate: AuthenticationService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authenticate.logOut();
  }

}
