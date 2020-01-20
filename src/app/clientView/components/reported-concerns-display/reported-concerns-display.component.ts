import { Component, OnInit } from '@angular/core';
import { WorkOrderService } from 'src/app/services/work-order.service';

@Component({
  selector: 'app-reported-concerns-display',
  templateUrl: './reported-concerns-display.component.html',
  styleUrls: ['./reported-concerns-display.component.css']
})
export class ReportedConcernsDisplayComponent implements OnInit {
  workOrders: any = [];

  constructor(private workOrderService: WorkOrderService) {
    this.getWorkOrders();
   }

  ngOnInit() {
  }

  getWorkOrders() {
    this.workOrderService.getAllWorkOrders().subscribe(data => {this.workOrders = data});
    console.log(this.workOrders);
    
  }

}
