import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authenticate.service';
import { Login } from 'src/app/models/login';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  login : Login = new Login();
  status;

  
  constructor(
    private router: Router,
    private authenticate: AuthenticationService
    ) { }

  ngOnInit() {
  }
  loginForm(){
    this.authenticate.authenticate(this.login.username, this.login.password)
                    .subscribe( 
                      (result) => this.router.navigate(['admin/logged-in']), 
                      (res : HttpErrorResponse) => this.status = res.status
                      

                      ); 
    // console.log(this.login.username + "  " + this.login.password)
  }

}
