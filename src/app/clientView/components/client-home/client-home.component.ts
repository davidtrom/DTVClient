import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {WorkOrderService} from '../../../services/work-order.service';
import { apiUrl } from '../../../services/user.service';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent implements OnInit {





  constructor(private router: Router) { }


  ngOnInit() {
  }

  reportView(){
    this.router.navigate(['create-report']);
  }

  requestView(){
    this.router.navigate(['request-ambassador']);
  }
}
