import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ToasterService } from './toaster.service';
import { User } from '../models/user';
import { Observable } from 'rxjs/observable';
import { RestApi } from '../api/rest-api';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService {

  api = new RestApi();
  constructor(private httpClient: HttpClient, private toasterService: ToasterService) { }

  checkLogin(user: User): Observable<User> {
    console.log("=================USER=================" + JSON.stringify(user));
    return this.httpClient.post<User>(this.api.LOGIN_URL, user, httpOptions);
  }

}
