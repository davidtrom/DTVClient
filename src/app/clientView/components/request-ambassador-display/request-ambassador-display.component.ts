import { Component, OnInit } from '@angular/core';
import { AmbassadorRequestService } from 'src/app/services/ambassador-request.service';
import { AmbassadorRequest } from 'src/app/models/ambassador-request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-ambassador-display',
  templateUrl: './request-ambassador-display.component.html',
  styleUrls: ['./request-ambassador-display.component.css']
})
export class RequestAmbassadorDisplayComponent implements OnInit {
  openAmbassadorRequests: any[];
  ambassadorRequests: any[];
  requestToClose: AmbassadorRequest;
  requestToEdit: AmbassadorRequest;

  constructor(private ambassadorRequestService : AmbassadorRequestService, private router: Router) {
    this.getOpenAmbassadorRequests();
   }

  ngOnInit() {
  }

  getOpenAmbassadorRequests() {
    this.ambassadorRequestService.getAllOpenRequests().subscribe(data => {this.openAmbassadorRequests = data});
    console.log(this.ambassadorRequests);
  }

  getAmbassadorRequests() {
    this.ambassadorRequestService.getAllRequests().subscribe(data => {this.ambassadorRequests = data});
    console.log(this.ambassadorRequests);
  }

  close(id: number) {
    this.ambassadorRequestService.close(id).subscribe(data => {this.requestToClose = data});
    console.log(this.ambassadorRequests);
    location.reload();
  }

  edit(id: number) {
    this.ambassadorRequestService.getRequestById(id).subscribe(data => {this.requestToEdit = data});
    this.router.navigate(['/admin/ambassador-requests/edit']);
  }


}
