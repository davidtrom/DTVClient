import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { WorkOrder } from 'src/app/models/WorkOrder';
import { UserService } from 'src/app/services/user.service';
import { WorkOrderService } from 'src/app/services/work-order.service';

@Component({
  selector: 'app-report-a-concern',
  templateUrl: './report-a-concern.component.html',
  styleUrls: ['./report-a-concern.component.css']
})
export class ReportAConcernComponent implements OnInit {
  
  title : string = "Report A Concern | Downtown Wilmington";
  workOrderForm : FormGroup;
  workOrder: WorkOrder;
  newReportFormIsCollapsed: boolean = true;

  constructor(
    private workOrderService : WorkOrderService, 
    private router : Router, 
    private fb: FormBuilder
    ){ 
    this.workOrderForm = this.fb.group({
        firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
        lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
        address: ['', [Validators.required]],
        description: ['', [Validators.required]],
        fileUpload: [null]
  });
  }


  ngOnInit() { }

  get firstName() {
    return this.workOrderForm.get('firstName');
  } 

  get lastName() {
    return this.workOrderForm.get('lastName');
  } 

  get address() {
    return this.workOrderForm.get('address');
  } 

  get description() {
    return this.workOrderForm.get('description');
  } 

  onSubmit(){

    console.log("inside submit")
    let workOrder: WorkOrder = new WorkOrder(
      this.workOrderForm.controls.firstName.value,
      this.workOrderForm.controls.lastName.value,
      this.workOrderForm.controls.description.value,
      this.workOrderForm.controls.address.value,
      this.workOrderForm.controls.fileUpload.value
    )
    console.log(workOrder);
    this.workOrderService.addReport(workOrder)
      .subscribe(data => {console.log("inside subscribe", data); this.workOrder = data});
    this.workOrderForm.reset();
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

  changeFileName() {
    const dataTransfer = new ClipboardEvent('').clipboardData || new DataTransfer();
    dataTransfer.items.add(new File(['fileUpload'], 'new-file-name'));
    const inputElement: HTMLInputElement = document.getElementById('my-input') as HTMLInputElement
  
    inputElement.files = dataTransfer.files;
  }

  uploadFile(event) {
this.uploadFile = event.target.files[0];
    // const file  = (event.target as HTMLInputElement).files[0];
    // this.workOrderForm.patchValue({
    //   fileUpload: file
    // });
    // this.workOrderForm.get('fileUpload').updateValueAndValidity()
  }
}

