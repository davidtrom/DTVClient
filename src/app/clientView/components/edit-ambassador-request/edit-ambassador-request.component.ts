import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AmbassadorRequestService } from 'src/app/services/ambassador-request.service';
import { AmbassadorRequest } from 'src/app/models/ambassador-request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-ambassador-request',
  templateUrl: './edit-ambassador-request.component.html',
  styleUrls: ['./edit-ambassador-request.component.css']
})
export class EditAmbassadorRequestComponent implements OnInit {

  updateAmbassadorRequestForm: FormGroup;
  ambassadorRequest: AmbassadorRequest;

  constructor(private ambassadorRequestService: AmbassadorRequestService, private router: Router) { }

  ngOnInit() {
  }

  createFormGroup() {
    return new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      phoneNumber: new FormControl('', [Validators.required]),
      pickUpAddress: new FormControl('', [Validators.required]),
      dropOffAddress: new FormControl('', [Validators.required])
    })
  }

  get firstName() {
    return this.updateAmbassadorRequestForm.get('firstName');
  }

  get lastName() {
    return this.updateAmbassadorRequestForm.get('lastName');
  }

  get phoneNumber() {
    return this.updateAmbassadorRequestForm.get('phoneNumber');
  }

  get pickUpAddress() {
    return this.updateAmbassadorRequestForm.get('pickUpAddress');
  }

  get dropOffAddress() {
    return this.updateAmbassadorRequestForm.get('dropOffAddress');

  }
  onSubmit() {
    console.log("inside submit")
    let ambassadorRequest: AmbassadorRequest = new AmbassadorRequest(
      this.updateAmbassadorRequestForm.controls.firstName.value,
      this.updateAmbassadorRequestForm.controls.lastName.value,
      this.updateAmbassadorRequestForm.controls.phoneNumber.value,
      this.updateAmbassadorRequestForm.controls.pickUpAddress.value,
      this.updateAmbassadorRequestForm.controls.dropOffAddress.value
    )
    console.log(ambassadorRequest);
    this.ambassadorRequestService.addAmbassadorRequest(ambassadorRequest)
      .subscribe(data => { console.log("inside subscribe", data); this.ambassadorRequest = data });
    this.updateAmbassadorRequestForm.reset();
    
  }

  openRequests(){
    event.preventDefault();
    this.router.navigate(['/ambassador-requests']);
  }

  closedRequests(){
    event.preventDefault();
    this.router.navigate(['/closed-requests']);
  }

}
