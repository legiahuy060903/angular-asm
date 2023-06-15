import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ChangePassComponent } from './change-pass/change-pass.component';

@NgModule({
  declarations: [
    EmployeeComponent,
    LoginComponent,
    ChangePassComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ToastModule
  ],
  providers: [ConfirmationService, MessageService]
})
export class EmployeeModule { }
