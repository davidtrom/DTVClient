import { Component, OnInit } from '@angular/core';
import { AmbassadorRequest } from 'src/app/models/ambassador-request';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AmbassadorRequestService } from 'src/app/services/ambassador-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-ambassador',
  templateUrl: './request-ambassador.component.html',
  styleUrls: ['./request-ambassador.component.css']
})
export class RequestAmbassadorComponent implements OnInit {
  newRequestFormIsCollapsed: boolean = true;
  createAmbassadorRequestForm: FormGroup;
  ambassadorRequest: AmbassadorRequest;

  constructor(private ambassadorRequestService: AmbassadorRequestService, private router: Router) {
    this.createAmbassadorRequestForm = this.createFormGroup();
  }

  ngOnInit() {
  }

  createFormGroup() {
    return new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      phoneNumber: new FormControl('', [Validators.required]),
      pickUpAddress: new FormControl('', [Validators.required]),
      dropOffAddress: new FormControl('', [Validators.required])
    })
  }

  get firstName() {
    return this.createAmbassadorRequestForm.get('firstName');
  }

  get lastName() {
    return this.createAmbassadorRequestForm.get('lastName');
  }

  get phoneNumber() {
    return this.createAmbassadorRequestForm.get('phoneNumber');
  }

  get pickUpAddress() {
    return this.createAmbassadorRequestForm.get('pickUpAddress');
  }

  get dropOffAddress() {
    return this.createAmbassadorRequestForm.get('dropOffAddress');

  }
  onSubmit() {
    console.log("inside submit")
    let ambassadorRequest: AmbassadorRequest = new AmbassadorRequest(
      this.createAmbassadorRequestForm.controls.firstName.value,
      this.createAmbassadorRequestForm.controls.lastName.value,
      this.createAmbassadorRequestForm.controls.phoneNumber.value,
      this.createAmbassadorRequestForm.controls.pickUpAddress.value,
      this.createAmbassadorRequestForm.controls.dropOffAddress.value
    )
    console.log(ambassadorRequest);
    this.ambassadorRequestService.addAmbassadorRequest(ambassadorRequest)
      .subscribe(data => { console.log("inside subscribe", data); this.ambassadorRequest = data });
    this.createAmbassadorRequestForm.reset();
    this.newRequestFormIsCollapsed = true;
  }

  displayRequestForm() {
    this.newRequestFormIsCollapsed = !this.newRequestFormIsCollapsed;
  }

  cancel() {
    this.router.navigate(['']);
  }
}
