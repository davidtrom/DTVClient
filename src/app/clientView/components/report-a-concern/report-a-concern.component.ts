import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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

  title: string = "Report A Concern | Downtown Wilmington";
  workOrder: WorkOrder = new WorkOrder();

  selectedFiles: FileList;
  currentFileUpload: File;

  selectedFile = null;

  changeImage = false;

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



  processForm(){
    this.workOrderService.addReport(this.workOrder).subscribe(input => console.log(this.workOrder));
    
  }

  upload() {
    this.currentFileUpload = this.selectedFiles.item(0);
    this.workOrderService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
    this.selectedFiles = undefined;
    });
    }

    selectFile(event) {
      this.selectedFiles = event.target.files;
      }
}



