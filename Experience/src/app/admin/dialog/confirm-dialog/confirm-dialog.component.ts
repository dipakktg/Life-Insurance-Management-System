import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from '../../../shared/services/user.service';
import { PolicyService } from '../../../shared/services/policy.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
    private policyService: PolicyService) { }
  onNoClick(): void {
    this.dialogRef.close(false);
  }

  confirmDelete(): void {
    console.log("data" + this.data.type);
    switch (this.data.type) {
      case "user":
        console.log("user");
        this.userService.deleteUser(this.data.id);
        break;
      case "policy":
        console.log("policy");
        this.policyService.deletePolicy(this.data.id);
        break;
     default:
        console.log("default");
    }

  }

  ngOnInit() {
  }

}
