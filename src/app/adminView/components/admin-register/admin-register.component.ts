import { Component, OnInit } from '@angular/core';
import { AdminRegister } from 'src/app/models/admin-register';
import { AdminRegisterService } from 'src/app/services/admin-register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  adminUser : AdminRegister = new AdminRegister();
  constructor(
    private register: AdminRegisterService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  adminRegister(){
    this.register.registerAdmin(this.adminUser).subscribe(data => this.router.navigate(['/admin/login']));
    console.log(this.adminUser);
  }

}
