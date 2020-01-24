import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { WorkOrder } from 'src/app/models/WorkOrder';
import { UserService } from 'src/app/services/user.service';
import { WorkOrderService } from 'src/app/services/work-order.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-report-a-concern',
  templateUrl: './report-a-concern.component.html',
  styleUrls: ['./report-a-concern.component.css']
})
export class ReportAConcernComponent implements OnInit {
  
  title : string = "Report A Concern | Downtown Wilmington";
  createWorkOrderForm : FormGroup;
  workOrder: WorkOrder;
  newReportFormIsCollapsed: boolean = true;

  stompClient = null;
  workorder_Destination: string = '/app/topic';

  constructor(
    private workOrderService : WorkOrderService, 
    private router : Router,
    private webSocket: WebsocketService
    ) { 
    this.createWorkOrderForm = this.createFormGroup();
  }

  ngOnInit() {
    this.stompClient = this.webSocket.getStompClient();
    this.stompClient.connect({},{},
       callback => {
      console.log("Successfully connected");
    } ,
      errorCallBack => {
        console.log("Error Connecting to Websocket");
      },
      this.workorder_Destination
    );
  }

  createFormGroup() {
    return new FormGroup({
        firstName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
        lastName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
        address: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required])
  });
  }

  get firstName() {
    return this.createWorkOrderForm.get('firstName');
  } 

  get lastName() {
    return this.createWorkOrderForm.get('lastName');
  } 

  get address() {
    return this.createWorkOrderForm.get('address');
  } 

  get description() {
    return this.createWorkOrderForm.get('description');
  } 

  onSubmit(){

    console.log("inside submit")
    let workOrder: WorkOrder = new WorkOrder(
      this.createWorkOrderForm.controls.firstName.value,
      this.createWorkOrderForm.controls.lastName.value,
      this.createWorkOrderForm.controls.description.value,
      this.createWorkOrderForm.controls.address.value,
    )
    console.log(workOrder);
    // this.workOrderService.addReport(workOrder)
    //   .subscribe(data => {console.log("inside subscribe", data); this.workOrder = data});
    this.workOrderService
    this.createWorkOrderForm.reset();
    this.newReportFormIsCollapsed = true;
    //this.router.navigate(['/register']);
  }

  cancel(){
    event.preventDefault();
    this.newReportFormIsCollapsed = true;
  }


  displayReportForm() {
    this.newReportFormIsCollapsed = !this.newReportFormIsCollapsed;
  }
}

