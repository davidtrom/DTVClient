import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  createWorkOrderForm: FormGroup;
  workOrder: WorkOrder;
  newReportFormIsCollapsed: boolean = true;
  selectedFiles: FileList;
  selectedFileNames: string[];
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  selectedFile = null;
  changeImage = false;
  file: string;
  awsEndpointUrl = "https://dtv-db.s3.amazonaws.com/";
  deleteFileEndpointUrl = apiUrl + "/deleteFile";

  constructor(private workOrderService: WorkOrderService, private router: Router, private http: HttpClient) {
    this.createWorkOrderForm = this.createFormGroup();
  }

  ngOnInit() {
  }

  createFormGroup() {
    return new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      address: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      uploadFiles: new FormControl('')
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

  onSubmit() {

    console.log("inside submit")
    let workOrder: WorkOrder = new WorkOrder(
      this.createWorkOrderForm.controls.firstName.value,
      this.createWorkOrderForm.controls.lastName.value,
      this.createWorkOrderForm.controls.description.value,
      this.createWorkOrderForm.controls.address.value,
      this.workOrder.selectedFileNames = this.getSelectedFileNames()
    )
    console.log(workOrder);
    this.workOrderService.addReport(workOrder)
      .subscribe(data => { console.log("inside subscribe", data); this.workOrder = data });
    this.createWorkOrderForm.reset();
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


  // Upload Work Order File Methods:

  viewFile() {
    window.open(this.awsEndpointUrl + this.file);
  }


  deleteFile() {
    this.http.post<string>(this.deleteFileEndpointUrl, this.file).subscribe(
      res => {
        this.file = res;
      }
    );
  }

  change(event) {
    this.changeImage = true;
  }

  changedImage(event) {
    this.selectedFile = event.target.files[0];
  }

  upload() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.getSelectedFileNames();
    this.workOrderService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      // this.selectedFiles = undefined;
    ;});
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;

  }

  getSelectedFileNames(): string[] {
    for (let i = 0; i < this.selectedFiles.length; i++) {
     this.selectedFileNames.push(this.selectedFiles[i].name);
    }
    return this.selectedFileNames;
  }
}

