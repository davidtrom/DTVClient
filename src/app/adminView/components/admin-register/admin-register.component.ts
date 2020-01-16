import { Component, OnInit } from '@angular/core';
import { AdminRegister } from 'src/app/models/admin-register';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  adminUser : AdminRegister = new AdminRegister();
  constructor() { }

  ngOnInit() {
  }

}
