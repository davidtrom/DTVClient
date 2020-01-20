import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { WorkOrder } from 'src/app/models/WorkOrder';
import { AmbassadorRequest } from 'src/app/models/AmbassadorRequest';
@Component({
  selector: 'app-live-feed',
  templateUrl: './live-feed.component.html',
  styleUrls: ['./live-feed.component.css']
})
export class LiveFeedComponent implements OnInit {
  workOrders : WorkOrder[];
  request : AmbassadorRequest[];
  workorder_Destination: string = '/topic';
  stompClient = null;
  constructor(
    private webSocket : WebsocketService
  ) {}
  ngOnInit() {
  }
  connect(){
    this.stompClient = this.webSocket.getStompClient();
    this.stompClient.connect(this.webSocket.username,this.webSocket.password, frame => {
      this.stompClient.subscribe(this.workorder_Destination, ouput => {
        this.workOrders.push(JSON.parse(ouput.body));
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