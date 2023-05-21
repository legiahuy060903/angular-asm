import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProjectComponent } from './list-project/list-project.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { ListStaffComponent } from './list-staff/list-staff.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { DetailProjectComponent } from './list-project/detail-project/detail-project.component';
import { FormsModule } from '@angular/forms';
import { ControlLeftComponent } from './control/control-left/control-left.component';
import { ControlRightComponent } from './control/control-right/control-right.component';
import { ControlComponent } from './control/control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
