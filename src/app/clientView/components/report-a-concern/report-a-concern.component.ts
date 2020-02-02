import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {WorkOrder} from 'src/app/models/WorkOrder';
import {UserService} from 'src/app/services/user.service';
import {WorkOrderService} from 'src/app/services/work-order.service';

@Component({
  selector: 'app-report-a-concern',
  templateUrl: './report-a-concern.component.html',
  styleUrls: ['./report-a-concern.component.css']
})
export class ReportAConcernComponent implements OnInit {


  title = 'Report A Concern | Downtown Wilmington';
  workOrder: WorkOrder = new WorkOrder();

  selectedFiles: FileList;
  currentFileUpload: File;

  selectedFile = null;

  changeImage = false;

  fileName: string;

  constructor(private workOrderService: WorkOrderService, private router: Router) {

  }

  ngOnInit() {
  }

  change(event) {
    this.changeImage = true;
  }

  changedImage(event) {
    this.selectedFile = event.target.files[0];
  }


  processForm() {
    this.upload();

    this.workOrder.fileName = this.fileName;
    this.workOrderService.addReport(this.workOrder).subscribe(input => console.log(this.workOrder));
    console.log(this.workOrder);
    this.router.navigate(['']);
  }

  upload() {
    this.currentFileUpload = this.selectedFiles.item(0);
    this.fileName = this.selectedFiles.item(0).name;
    this.workOrderService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      this.selectedFiles = undefined;
    });
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  cancel(){
    this.router.navigate(['']);
  }
}



