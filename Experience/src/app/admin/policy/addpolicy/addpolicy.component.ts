import { Component, OnInit, ViewChild, ElementRef, Inject} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { Policy } from '../../../shared/models/policy';
import { PolicyService } from '../../../shared/services/policy.service';
@Component({
  selector: 'app-addpolicy',
  templateUrl: './addpolicy.component.html',
  styleUrls: ['./addpolicy.component.scss']
})
export class AddpolicyComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  myControl: FormControl = new FormControl();

  policy = new Policy();
  title ="Add Policy";

  constructor(public dialogRef: MatDialogRef<AddpolicyComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
            private policyService:PolicyService,
            public dialog: MatDialog) { }

  ngOnInit() {
    if(this.data.id!=null && this.data.id>0){
      this.policy = this.data;
      this.title="Update Policy";
    }
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  public confirmAdd(): void {
    console.log(JSON.stringify(this.policy));
    this.policyService.addPolicy(this.policy);
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'Email is required' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  getCheckMessage(){}

}
