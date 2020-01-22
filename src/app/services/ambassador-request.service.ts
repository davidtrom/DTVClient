import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { apiUrl } from './user.service';
import { AmbassadorRequest } from '../models/ambassador-request';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AmbassadorRequestService {

  @Inject(apiUrl)
  private apiUrl : string;
  addRequestUrl: string = apiUrl + "/ambassador-requests/request";
  getAllRequestsUrl: string = apiUrl + "/ambassador-requests";
  getAllClosedRequestsUrl : string = apiUrl + "/ambassador-requests/closed"; 
  updateStatusUrl: string = apiUrl + "/ambassador-requests/close/";

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  constructor( private http: HttpClient) { }

  addAmbassadorRequest(ambassadorRequest: AmbassadorRequest): Observable<AmbassadorRequest>{
    console.log("inside add request", this.addRequestUrl);
    return this.http.post<AmbassadorRequest>(this.addRequestUrl, ambassadorRequest, this.httpOptions)
      .pipe(tap(data => console.log(data)), catchError(this.handleError<AmbassadorRequest>('add Ambassador Request', null)));  
  }

  getAllRequests() : Observable <AmbassadorRequest[]>{
    return this.http.get<AmbassadorRequest[]>(this.getAllRequestsUrl, this.httpOptions)
      .pipe(tap(data => console.log(data)), catchError(this.handleError<AmbassadorRequest[]>('fething all requests', null)));
  }

  getAllClosedRequests() : Observable <AmbassadorRequest[]>{
    return this.http.get<AmbassadorRequest[]>(this.getAllClosedRequestsUrl, this.httpOptions)
      .pipe(tap(data => console.log(data)), catchError(this.handleError<AmbassadorRequest[]>('fething all closed requests', null)));
  }

  close(id): Observable <AmbassadorRequest> {
    return this.http.put<AmbassadorRequest>(this.updateStatusUrl + id, this.httpOptions)
      .pipe(tap(data => console.log(data)), catchError(this.handleError<AmbassadorRequest>('status: closed', null)));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
