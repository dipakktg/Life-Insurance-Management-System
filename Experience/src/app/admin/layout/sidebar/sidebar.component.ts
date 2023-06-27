import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {
  firstname:string;
  lastname:string;
  useremail:string;
  picture:string;
  constructor() { }

  ngOnInit() {
    this.firstname = localStorage.getItem("firstname");
    this.lastname = localStorage.getItem("lastname");
    this.useremail = localStorage.getItem("useremail");
    this.picture = localStorage.getItem("picture");
  }
  
  hideSubmenu($event){
    $('mat-list-item').removeClass('open'); 
  }

}
