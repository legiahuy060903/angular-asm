import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
  { path: '', loadChildren: () => import('./leader/leader.module').then(m => m.LeaderModule) },
  { path: 'leader', loadChildren: () => import('./leader/leader.module').then(m => m.LeaderModule) },
  { path: 'home', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
