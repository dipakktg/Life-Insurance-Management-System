import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { User } from '../../shared/models/user';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { Country } from '../../shared/models/country';
import { State } from '../../shared/models/state';
import { CountryStateService } from '../../shared/services/country-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  loggedUser:string;
  firstname:string;
  lastname:string;
  useremail:string;
  picture:string;
  contactno:string;
  userid:string;
  id:number;
  countries: Country[];
  states: State[];

  email = new FormControl('', [Validators.required, Validators.email]);
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  pokemonControl = new FormControl();
  myControl: FormControl = new FormControl();

  user = new User();

  constructor(private userService:UserService, private _dataService:CountryStateService, private router:Router) { }

  ngOnInit() {
    this.id = parseInt(localStorage.getItem("userid"));
    if(this.id!=null && this.id>0)
    {
      this.getUser(this.id);
    }
    this.countries = this._dataService.getCountries();
    this.firstname = localStorage.getItem("firstname");
    this.lastname = localStorage.getItem("lastname");
    this.useremail = localStorage.getItem("useremail");
    this.picture = localStorage.getItem("picture");
    this.contactno = localStorage.getItem("contactno")
  }

  isValidUser(){
    this.loggedUser = localStorage.getItem("user");
    if(this.loggedUser===null){
      this.router.navigateByUrl("/");
    }
  }

  onSelect(country) {
    this.states = this._dataService.getStates().filter((item)=> item.country == country);
   }


  getUser(id:number){
    this.userService.getUser(id).subscribe(data=>{
      this.user = data;
      this.onSelect(this.user.country);
    })
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  onSubmit():void{
    console.log("------------------------HI-----------------------------"+JSON.stringify(this.user));
    this.userService.addUser(this.user);
    this.router.navigateByUrl("/admin/dashboard");
  }

}
