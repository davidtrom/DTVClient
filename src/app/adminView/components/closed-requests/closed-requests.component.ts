import { Component, OnInit } from '@angular/core';
import { AmbassadorRequestService } from 'src/app/services/ambassador-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-closed-requests',
  templateUrl: './closed-requests.component.html',
  styleUrls: ['./closed-requests.component.css']
})
export class ClosedRequestsComponent implements OnInit {
  closedAmbassadorRequests: any[];

  constructor(private ambassadorRequestService: AmbassadorRequestService, private router: Router) {
    this.getAllClosedAmbassadorRequests();
   }

  ngOnInit() {
  }

  getAllClosedAmbassadorRequests(){
    this.ambassadorRequestService.getAllClosedRequests().subscribe(data => {this.closedAmbassadorRequests = data});
  }

}
