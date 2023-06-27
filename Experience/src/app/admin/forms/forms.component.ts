import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  fileName2 : string;
  
  email = new FormControl('', [Validators.required, Validators.email]);
  date = new FormControl(new Date());
  myControl: FormControl = new FormControl();

 
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  separatorKeysCodes = [ENTER, COMMA];

  chips = [
  ];

  constructor() { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our color
    if ((value || '').trim()) {
      this.chips.push({ name: value.trim(), selected: true });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(color: any): void {
    let index = this.chips.indexOf(color);

    if (index >= 0) {
      this.chips.splice(index, 1);
    }
  }

  uploadFile(event, file: ElementRef) {
    let files1 = event.target.files[0];
    file['value'] = (files1) ? files1.name : '';
  }

}
