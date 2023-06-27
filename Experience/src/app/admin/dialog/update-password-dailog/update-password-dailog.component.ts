import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { LoginService } from '../../../shared/services/login.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-password-dailog',
  templateUrl: './update-password-dailog.component.html',
  styleUrls: ['./update-password-dailog.component.scss']
})
export class UpdatePasswordDailogComponent implements OnInit {
  id:number;
  userPwd:string;
  confPwd:string;
  constructor(public dialogRef: MatDialogRef<UpdatePasswordDailogComponent>, private loginService:LoginService, private router:Router) { }

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);
  
  onNoClick(): void {
    this.dialogRef.close(false);
  }


  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  ngOnInit() {
    this.id = parseInt(localStorage.getItem("userid"));
    if(this.id === null && this.id<=0){
      this.router.navigateByUrl("/");
    }
  }

}
