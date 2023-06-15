import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaderRoutingModule } from './leader-routing.module';
import { LeaderComponent } from './leader.component';
import { ListProjectComponent } from './list-project/list-project.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { ListStaffComponent } from './list-staff/list-staff.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { GenderPipe, PriorityPipe, VndPipe } from '../pipes/mypipes.pipe';

import { ControlComponent } from './control/control.component';
import { ControlRightComponent } from './control-right/control-right.component';
import { ControlLeftComponent } from './control-left/control-left.component';
import { DetailProjectComponent } from './detail-project/detail-project.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TreeTableModule } from 'primeng/treetable';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConfirmationService, MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    LeaderComponent,
    ListProjectComponent,
    AddProjectComponent,
    ListTaskComponent,
    ListStaffComponent,
    AddTaskComponent,
    PageNotFoundComponent,
    BreadcrumbComponent,
    DetailProjectComponent,
    ControlLeftComponent,
    ControlRightComponent,
    ControlComponent,
    VndPipe,
    GenderPipe,
    PriorityPipe,
    AddStaffComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    LeaderRoutingModule,
    ProgressSpinnerModule,
    ToastModule,
    ButtonModule,
    DialogModule,
    TagModule,
    ConfirmDialogModule,
    TreeTableModule,
    SidebarModule,
    TableModule
  ],
  providers: [ConfirmationService, MessageService]
})
export class LeaderModule { }
