import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {
  }

  registerView(){
    this.router.navigate(['admin/register']);
  }

  loginView(){
    this.router.navigate(['admin/login']);
  }
 }
