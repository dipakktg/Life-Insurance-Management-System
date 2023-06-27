import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/observable';


import { User } from '../models/user';
import { ToasterService } from './toaster.service';
import { RestApi } from '../api/rest-api';

@Injectable()
export class UserService {
  api = new RestApi();

  dataChange: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;

  constructor (private httpClient: HttpClient, private toasterService:ToasterService) {}

  get data(): User[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

 /** CRUD METHODS */
 getAllUsers(): void {
  this.httpClient.get<User[]>(this.api.USER_URL).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
}

addUser(user: User): void {
  this.httpClient.post(this.api.USER_URL, user).subscribe(data => {
    console.log("response is "+data);
    this.dialogData = data;
    console.log(this.dialogData);
    if(user.id!=null && user.id>0){
      this.toasterService.openSuccessSnackBar('Successfully updated','', 2000);
    }else{
      this.toasterService.openSuccessSnackBar('Successfully added','', 2000);
    }
  },
    (err: HttpErrorResponse) => {
      this.toasterService.openErrorSnackBar('Error occurred. Details: ' + err.name + ' ' + err.message,'', 8000);
    });
}

deleteUser(id: number): void {
  console.log("user"+id);
  const url = `${this.api.USER_URL}/${id}`;
  
  this.httpClient.delete(url).subscribe(data => {
    console.log(data['']);
      this.toasterService.openSuccessSnackBar('Successfully deleted','ok', 1000);
    },
    (err: HttpErrorResponse) => {
      this.toasterService.openErrorSnackBar('Error occurred. Details: ' + err.name + ' ' + err.message,'', 8000);
    }
  );
}

getUser(id:number):Observable<User>{
  console.log("user"+id);
  const url = `${this.api.USER_URL}/${id}`;
  return this.httpClient.get<User>(url);
}

}
