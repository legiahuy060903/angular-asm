import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderComponent } from './leader.component';
import { ListProjectComponent } from './list-project/list-project.component';
import { DetailProjectComponent } from './detail-project/detail-project.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { ControlComponent } from './control/control.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { ListStaffComponent } from './list-staff/list-staff.component';
import { authenGuard } from '../guards/authen.guard';


const routes: Routes = [
  {
    path: '', component: LeaderComponent, canActivate: [authenGuard], children: [
      { path: 'project', component: ListProjectComponent, data: { breadcrumb: 'Dự án' } },
      { path: 'project/:id', component: DetailProjectComponent, data: { breadcrumb: 'Chi Tiết Dự án ' } },
      { path: 'create-project', component: AddProjectComponent, data: { breadcrumb: 'Tạo Dự án' } },
      { path: 'create-task', component: AddTaskComponent, data: { breadcrumb: 'Tạo Công việc' } },
      { path: 'create-staff', component: AddStaffComponent, data: { breadcrumb: 'Thêm nhân viên' } },
      { path: 'control', component: ControlComponent, data: { breadcrumb: 'Bảng điều khiển' } },
      { path: 'task', component: ListTaskComponent, data: { breadcrumb: 'Công việc' } },
      { path: 'staff', component: ListStaffComponent, data: { breadcrumb: 'Nhân viên' } },
      { path: '', redirectTo: '/leader/control', pathMatch: 'full' },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaderRoutingModule { }
