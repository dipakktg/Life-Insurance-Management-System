import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsComponent } from './forms/forms.component';
import { TablesComponent } from './tables/tables.component';
import { DialogComponent } from './dialog/dialog.component';
import { WizardComponent } from './wizard/wizard.component';
import { OtherElementsComponent } from './other-elements/other-elements.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { DatatablesComponent } from './datatables/datatables.component';
import { ChatComponent } from './chat/chat.component';
import { GridSystemComponent } from './grid-system/grid-system.component';
import { UserComponent } from './user/user.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { PolicyComponent } from './policy/policy.component';
const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path: 'dashboard', component: DashboardComponent},
            {
                path: 'profile', component: ProfileComponent, data: {
                    breadcrumb: "Profile"
                }
            },
            { path: 'forms', component: FormsComponent },
            { path: 'tables', component: TablesComponent },
            { path: 'dialog', component: DialogComponent },
            { path: 'wizard', component: WizardComponent },
            { path: 'otherElements', component: OtherElementsComponent },
            { path: 'datatables', component: DatatablesComponent },
            { path: 'chat', component: ChatComponent },
            { path: 'grid-system', component: GridSystemComponent },
            {
                path: 'user', component: UserComponent, data: {
                    breadcrumb: "Users"
                }
            },
            {
                path: 'policy', component: PolicyComponent, data: {
                    breadcrumb: "Policies"
                }
            },
         
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'set-password',
        component: SetPasswordComponent
    },
    {
        path: 'error',
        component: ErrorComponent
    },
    {
        path: '**',
        component: ErrorComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }

//data: for breadcrumb name