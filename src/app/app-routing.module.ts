import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProjectComponent } from './list-project/list-project.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { ListStaffComponent } from './list-staff/list-staff.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailProjectComponent } from './list-project/detail-project/detail-project.component';
import { ControlComponent } from './control/control.component';
const routes: Routes = [
  { path: 'project', component: ListProjectComponent, data: { breadcrumb: 'Project' } },
  { path: 'project/:id', component: DetailProjectComponent, data: { breadcrumb: 'Chi Tiết Project ' } },
  { path: 'create-project', component: AddProjectComponent, data: { breadcrumb: 'Tạo Project' } },
  { path: 'create-task', component: AddTaskComponent, data: { breadcrumb: 'Tạo Task' } },
  { path: 'control', component: ControlComponent, data: { breadcrumb: 'Bảng điều khiển' } },
  { path: 'task', component: ListTaskComponent, data: { breadcrumb: 'Task' } },
  { path: 'staff', component: ListStaffComponent, data: { breadcrumb: 'Staff' } },
  { path: '', redirectTo: '/control', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
