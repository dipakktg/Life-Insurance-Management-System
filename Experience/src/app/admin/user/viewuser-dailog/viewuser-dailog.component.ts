import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-viewuser-dailog',
  templateUrl: './viewuser-dailog.component.html',
  styleUrls: ['./viewuser-dailog.component.scss']
})
export class ViewuserDailogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ViewuserDailogComponent>,
        @Inject(MAT_DIALOG_DATA) public user: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }
}

