import { Injectable } from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import { environment } from 'src/environments/environment';
import { AmbassadorRequest } from '../models/ambassador-request';
import { WorkOrder } from '../models/WorkOrder';


@Injectable()
export class WebsocketService {
  webSocketEndPoint: string = 'ws://localhost:8080/socket';
  stompClient: any;
  username: string;
  password: string;



  constructor() { }



  getStompClient() {
    // const socket = new WebSocket(this.webSocketEndPoint);
    // this.stompClient = Stomp.over(socket);
    this.stompClient = Stomp.client(this.webSocketEndPoint);
    return this.stompClient;

  }

  sendRequest(dest: String, request: AmbassadorRequest) {
    this.stompClient.send(dest, {}, JSON.stringify(request));
  }

  sendWorkOrder(dest: String, workOrder: WorkOrder) {
    this.stompClient.send(dest, {}, JSON.stringify(workOrder));
  }
}
