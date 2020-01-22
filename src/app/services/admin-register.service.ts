import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AdminRegister } from '../models/admin-register';

@Injectable({
  providedIn: 'root'
})
export class AdminRegisterService {

  url: String = environment.apiUrl;

  constructor(private http: HttpClient) { }

  registerAdmin(adminUser: AdminRegister){
    return this.http.post<AdminRegister>(this.url + "/admin/create", adminUser);
  }


}
