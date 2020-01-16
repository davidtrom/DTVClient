import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-a-concern',
  templateUrl: './report-a-concern.component.html',
  styleUrls: ['./report-a-concern.component.css']
})
export class ReportAConcernComponent implements OnInit {
  title : string = "Report A Concern | Downtown Wilmington";

  newReportFormIsCollapsed: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  displayReportForm() {
    this.newReportFormIsCollapsed = !this.newReportFormIsCollapsed;
  }
 

}
