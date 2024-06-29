import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee-m/employee/employee.component';
import { DepartmentComponent } from './department-m/department/department.component';

const routes: Routes = [

  {path:'department',component:DepartmentComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'',redirectTo:'/department', pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
