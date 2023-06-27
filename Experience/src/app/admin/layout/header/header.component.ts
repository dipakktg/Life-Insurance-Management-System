import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ThemeService } from '../../../shared/services/theme.service';
import { MatDialog } from '@angular/material';
import { User } from '../../../shared/models/user';
import { ConfirmDialogComponent } from '../../dialog/confirm-dialog/confirm-dialog.component';
import { UpdatePasswordDailogComponent } from '../../dialog/update-password-dailog/update-password-dailog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  @Input('sidenav') sidenav: any;
  @Input('sidebar') sidebar: any;

  removeMessage: Boolean = false;
  themes;
  displaySearch: Boolean = false;
  firstname:string;
  lastname:string;
  usermemail:string;
  picture:string;
  loggedUser:any;
  user = new User();

  constructor(private themeService: ThemeService,
    private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.themes = this.themeService.themes;
    this.firstname = localStorage.getItem("firstname");
    this.lastname = localStorage.getItem("lastname");
    this.loggedUser = localStorage.getItem("user"); 
    this.picture = localStorage.getItem("picture");
  }

  changeTheme(theme) {
    this.themeService.changeTheme(theme);
  }

  logout() {
    localStorage.removeItem("firstname");
    localStorage.removeItem("lastname");
    localStorage.removeItem("useremail");
    localStorage.removeItem("user");
    this.router.navigateByUrl("/admin/login");
  }

  openUpdatePasswordDialog() {
    let dialogRef = this.dialog.open(UpdatePasswordDailogComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == 1) {
        //this.exampleDatabase.dataChange.value.push(this.roleService.getDialogData());
        // this.refreshTable();
      }
    });
  }

}
