import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {WorkOrderService} from '../../../services/work-order.service';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent implements OnInit {
  reportConcern:Boolean = true;
  requestAmbassador:Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  reportView(){
    this.reportConcern = true;
    this.requestAmbassador = false;
  }

  requestView(){
    this.reportConcern = false;
    this.requestAmbassador = true;
  }
}
