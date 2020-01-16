import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'; export const apiUrl = environment.apiUrl;
import { Observable, of, BehaviorSubject } from 'rxjs';
import { User } from '../models/User';
import { catchError, map, tap } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class UserService {
  @Inject(apiUrl)
  private apiUrl : string;
  registerUserUrl : string = apiUrl + "/clients";
  checkEmailUrl : string = apiUrl + "/clients/check-email";
  currentUser$ : BehaviorSubject<any> = new BehaviorSubject([]);


  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }


  constructor(private http: HttpClient) { }

  //Add a new user to the database
  addUser(user: User): Observable<User>{
    console.log(apiUrl);
    console.log(this.registerUserUrl);
    return this.http.post<User>(this.registerUserUrl + "/register", user, this.httpOptions).pipe(tap(data => console.log(data)), catchError(this.handleError<User>('addUser')));
  }

  checkEmailAvailability(email: string): Observable<boolean> {
    let reqData: Object = {"email": email};
    return this.http.post<boolean>(this.checkEmailUrl, reqData, this.httpOptions);
      //.pipe(tap(data => console.log(data)));
  }

  updateCurrentUser(user : User) {
    console.log("user update in service",user);
    this.currentUser$.next(user);
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
