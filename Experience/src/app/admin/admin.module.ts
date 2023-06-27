import { NgModule } from '@angular/core';
import {AgmCoreModule} from '@agm/core';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';
import { TextMaskModule } from 'angular2-text-mask';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ThemeService } from '../shared/services/theme.service';

import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsComponent } from './forms/forms.component';
import { TablesComponent } from './tables/tables.component';
import { DialogComponent } from './dialog/dialog.component';
import { ConfirmDialogComponent } from './dialog/confirm-dialog/confirm-dialog.component';
import { LoaderDialogComponent } from './dialog/loader-dialog/loader-dialog.component';
import { SettingsComponent } from './layout/settings/settings.component';
import { WizardComponent } from './wizard/wizard.component';
import { OtherElementsComponent } from './other-elements/other-elements.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { DatatablesComponent } from './datatables/datatables.component';
import { ChatComponent } from './chat/chat.component';
import { GridSystemComponent } from './grid-system/grid-system.component';
import { ImageDialogComponent } from './dashboard/image-dialog/image-dialog.component';
import { UserComponent } from './user/user.component';
import { UserService } from '../shared/services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { AdduserDialogComponent } from './user/adduser-dialog/adduser-dialog.component';
import { ToasterService } from '../shared/services/toaster.service';
import { UpdatePasswordDailogComponent } from './dialog/update-password-dailog/update-password-dailog.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewuserDailogComponent } from './user/viewuser-dailog/viewuser-dailog.component';
import { LoginService } from '../shared/services/login.service';
import { CountryStateService } from '../shared/services/country-state.service';
import {PolicyService} from '../shared/services/policy.service';
import { AddpolicyComponent } from './policy/addpolicy/addpolicy.component';
import { PolicyComponent } from './policy/policy.component';
import { ViewpolicyComponent } from './policy/viewpolicy/viewpolicy.component';
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    QuillModule,
    NgxDatatableModule,
    HttpClientModule,
    ReactiveFormsModule, // <-- #2 add to @NgModule imports
    TextMaskModule,
    AngularMultiSelectModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBj92IhqCq_Bhx9oz6MSW0rhinU5kIr2pU',//AIzaSyBwpjbLHtN0_4Jl4rgYkcI3g4e4w4-eIiU
      libraries: ['places']
    })
  ],
  providers: [
    ThemeService,LoginService, UserService, CountryStateService,ToasterService, 
    PolicyService,
  ],
  entryComponents: [
    ConfirmDialogComponent, LoaderDialogComponent, ImageDialogComponent, UpdatePasswordDailogComponent,
    AddpolicyComponent,PolicyComponent,ViewpolicyComponent,
  ],
  declarations: [
    LayoutComponent, DashboardComponent, HeaderComponent, SidebarComponent,
    BreadcrumbComponent, ProfileComponent, FormsComponent, TablesComponent, DialogComponent,
    ConfirmDialogComponent, LoaderDialogComponent, SettingsComponent, WizardComponent,
    OtherElementsComponent, LoginComponent, RegisterComponent,
    ErrorComponent, DatatablesComponent, ChatComponent, GridSystemComponent,
    ImageDialogComponent, UserComponent,
    AdduserDialogComponent,UpdatePasswordDailogComponent, SetPasswordComponent,ViewuserDailogComponent,
    PolicyComponent,AddpolicyComponent,ViewpolicyComponent  ]
})
export class AdminModule { }
