import { Component, OnInit, ViewChild, ElementRef, Inject} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { User } from '../../../shared/models/user';
import { UserService } from '../../../shared/services/user.service';
import { Country } from '../../../shared/models/country';
import { State } from '../../../shared/models/state';

@Component({
  selector: 'app-adduser-dialog',
  templateUrl: './adduser-dialog.component.html',
  styleUrls: ['./adduser-dialog.component.scss']
})
export class AdduserDialogComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  contactno = new FormControl(['',[Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/),Validators.required]]);
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  pokemonControl = new FormControl();
  myControl: FormControl = new FormControl();

  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  user = new User();
  countries: Country[];
  states: State[];
  checkedUsername:boolean = false;
  checkedUseremail:boolean = false;

  constructor(public dialogRef: MatDialogRef<AdduserDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
           
            private userService:UserService,
            public dialog: MatDialog) { }

  ngOnInit() {
    this.getRoles();
   // this.countries = this._dataService.getCountries();
    if(this.data.id!=null && this.data.id>0){
      this.user = this.data;
    //  this.role = this.user.userrole;
      //this.getRoleAssignedPermissions(this.role);
      this.onSelect(this.user.country);
    }
  }

  getRoles():void{
  //
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onSelect(country) {
    //
   }

  public confirmAdd(): void {
    console.log(JSON.stringify(this.user));
    this.userService.addUser(this.user);
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'Email is required' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  getCheckMessage(){}


}

