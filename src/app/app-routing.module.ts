import {Routes,RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import{AppNotFoundComponent} from './app-not-found/app-not-found.component';
import {DepartmentDetailComponent} from './department-detail/department-detail.component';

const routes: Routes=[
  { path: '',
    redirectTo:'/employeeList', pathMatch:'full'},
  {path:'employeeList',
    component:EmployeeListComponent},
    {path:'employeeDetails',
      component:EmployeeDetailsComponent},
      {path: 'department/:id',component:DepartmentDetailComponent},
      {path:"**",
      component:AppNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[EmployeeDetailsComponent,EmployeeListComponent,DepartmentDetailComponent];

