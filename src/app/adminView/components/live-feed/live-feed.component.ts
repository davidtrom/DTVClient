import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { WorkOrder } from 'src/app/models/WorkOrder';
import { AmbassadorRequest } from 'src/app/models/ambassador-request';
@Component({
  selector: 'app-live-feed',
  templateUrl: './live-feed.component.html',
  styleUrls: ['./live-feed.component.css']
})
export class LiveFeedComponent implements OnInit {
  workOrders : WorkOrder[];
  request : AmbassadorRequest[];
  workorder_Destination: string = '/app/topic';
  stompClient = null;
  constructor(
    private webSocket : WebsocketService
  ) {}
  ngOnInit() {
  }
  connect(){
    this.stompClient = this.webSocket.getStompClient();
    this.stompClient.connect({}, frame => {
      this.stompClient.subscribe(this.workorder_Destination, ouput => {
        this.workOrders.push(JSON.parse(ouput.WorkOrder));
      });
    });
  }
  disconnect(){
    if(this.stompClient !== null){
      this.stompClient.connect();
    }
    console.log("Disconnected");
  }
}