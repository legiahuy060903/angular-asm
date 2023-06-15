import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { LoginComponent } from './login/login.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { authenGuard } from '../guards/authen.guard';

const routes: Routes = [
  { path: '', component: EmployeeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'changepass', component: ChangePassComponent, canActivate: [authenGuard] },
  // { path: 'changepass', component: ChangePassComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
