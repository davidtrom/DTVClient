import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-ambassador',
  templateUrl: './request-ambassador.component.html',
  styleUrls: ['./request-ambassador.component.css']
})
export class RequestAmbassadorComponent implements OnInit {
  newRequestFormIsCollapsed: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  displayRequestForm() {
    this.newRequestFormIsCollapsed = !this.newRequestFormIsCollapsed;
  }
}
