import { Component, OnInit} from '@angular/core';
import { MatDialog, MatSnackBar} from '@angular/material';
import { ThemeService } from '../../shared/services/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  useremail:string;
  constructor(private themeService: ThemeService, private router:Router) { 
  }

  ngOnInit() {
    this.isValidUser();
  }

  isValidUser(){
    this.useremail = localStorage.getItem("user");
    if(this.useremail===null){
      this.router.navigateByUrl("/");
    }
  }
}