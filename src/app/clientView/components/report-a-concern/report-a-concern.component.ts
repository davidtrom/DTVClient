import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { WorkOrder } from 'src/app/models/WorkOrder';
import { UserService } from 'src/app/services/user.service';
import { WorkOrderService } from 'src/app/services/work-order.service';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/app/services/user.service';

@Component({
  selector: 'app-report-a-concern',
  templateUrl: './report-a-concern.component.html',
  styleUrls: ['./report-a-concern.component.css']
})

export class ReportAConcernComponent implements OnInit {

  title: string = "Report A Concern | Downtown Wilmington";
  workOrderForm: FormGroup;
  workOrder: WorkOrder;
  submittedFiles: FormArray;
  newReportFormIsCollapsed: boolean = true;
  public awsEndpointUrl = "https://dtv-db.s3.amazonaws.com/";
  deleteFileEndpointUrl = apiUrl + "/deleteFile";
  workOrderFiles: string[] = [];
  workOrderFilePathUrls: string[] = [];


  constructor(private workOrderService: WorkOrderService, private router: Router,
    private http: HttpClient, private formBuilder: FormBuilder) { }


  ngOnInit() { 
    this.workOrderForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    address: ['', [Validators.required]],
    description: ['', [Validators.required]],
    submittedFiles: this.formBuilder.array([this.createFileFormGroup()])
  });
  }





addFile(): void {
  this.submittedFiles = this.workOrderForm.get('submittedFiles') as FormArray;
  this.submittedFiles.push(this.createFileFormGroup());
}

createFileFormGroup(): FormGroup {
  return this.formBuilder.group({
    newFile: [null]
  });
}


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


addFilePathUrl(): string[] {
  console.log(this.submittedFiles);
  for (var i = 0; i < this.submittedFiles.length; i++) {
    this.workOrderFilePathUrls[i] = this.submittedFiles[i].name;
  }
  return this.workOrderFilePathUrls;
}

onSubmit() {

  console.log("inside submit")
  let workOrder: WorkOrder = new WorkOrder(
    this.workOrderForm.controls.firstName.value,
    this.workOrderForm.controls.lastName.value,
    this.workOrderForm.controls.description.value,
    this.workOrderForm.controls.address.value,
    this.workOrderForm.controls.submittedFiles.value
  )

  console.log(workOrder);
  this.workOrderService.addReport(workOrder)
    .subscribe(data => { console.log("inside subscribe", data); this.workOrder = data });
  this.workOrderService.uploadFiles()
  this.workOrderForm.reset();
  this.newReportFormIsCollapsed = true;
  //this.router.navigate(['/register']);
}

cancel() {
  event.preventDefault();
  this.newReportFormIsCollapsed = true;
}


displayReportForm() {
  this.newReportFormIsCollapsed = !this.newReportFormIsCollapsed;
}

   
}

