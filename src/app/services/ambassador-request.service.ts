import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AmbassadorRequest } from '../models/ambassador-request';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AmbassadorRequestService {

  
  baseUrl: string = environment.apiUrl;
  addRequestUrl: string = this.baseUrl + '/ambassador-requests/request';
  getAllReportsUrl: string = this.baseUrl + '/ambassador-requests';

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
    return this.http.get<AmbassadorRequest[]>(this.getAllReportsUrl, this.httpOptions)
      .pipe(tap(data => console.log(data)), catchError(this.handleError<AmbassadorRequest[]>('fetching all requests', null)));
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
