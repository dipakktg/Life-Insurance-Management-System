import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../shared/services/theme.service';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';
import { LoginService } from '../../shared/services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted = false;
  user = new User();
  errorMessage:string;
  loggedUser:string;
  constructor(private themeService: ThemeService, private loginService:LoginService, private router:Router) { }

  ngOnInit() {
    this.isValidUser();
  }

  isValidUser(){
    this.loggedUser = localStorage.getItem("user");
    if(this.loggedUser!=null){
      this.router.navigateByUrl("/admin/dashboard");
    }else{
      this.router.navigateByUrl("/admin/login");
    }
  }

  onSubmit() {
    this.submitted = true;
    this.loginService.checkLogin(this.user).subscribe(data=>{
      if(!data){
        this.errorMessage="Sorry invalid credentials...please try again!";
        return;
      }else{
        this.user = data;
      if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("firstname",this.user.firstname);
        localStorage.setItem("userid",this.user.id.toString());
        localStorage.setItem("lastname",this.user.lastname);
        localStorage.setItem("useremail",this.user.useremail);
        localStorage.setItem("picture",this.user.picture);
        localStorage.setItem("contactno",this.user.contactno);
        localStorage.setItem("user", JSON.stringify(data));
      } else {
      
      } 
      this.router.navigateByUrl("/admin/dashboard");
      }
    });
  }

}
