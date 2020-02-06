import { Component, OnInit } from '@angular/core';
import { AmbassadorRequestService } from 'src/app/services/ambassador-request.service';

@Component({
  selector: 'app-request-ambassador-display',
  templateUrl: './request-ambassador-display.component.html',
  styleUrls: ['./request-ambassador-display.component.css']
})
export class RequestAmbassadorDisplayComponent implements OnInit {
  ambassadorRequests: any[];

  constructor(private ambassadorRequestService : AmbassadorRequestService) {
    this.getAmbassadorRequests();
   }

  ngOnInit() {
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


}
