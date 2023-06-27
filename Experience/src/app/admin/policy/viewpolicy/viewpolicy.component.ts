import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-viewpolicy',
  templateUrl: './viewpolicy.component.html',
  styleUrls: ['./viewpolicy.component.scss']
})
export class ViewpolicyComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ViewpolicyComponent>,
    @Inject(MAT_DIALOG_DATA) public policy: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

}
