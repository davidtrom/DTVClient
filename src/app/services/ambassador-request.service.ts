import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AmbassadorRequestService {
  
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  constructor(private http: HttpClient) { }

  addAmbassadorRequest(ambassadorRequest: AmbassadorRequest): Observable<AmbassadorRequest>{
    console.log("inside add report", this.addReportUrl);
    return this.http.post<WorkOrder>(this.addReportUrl, workOrder, this.httpOptions)
      .pipe(tap(data => console.log(data)), catchError(this.handleError<WorkOrder>('add Work Order', null)));  
  }
}
