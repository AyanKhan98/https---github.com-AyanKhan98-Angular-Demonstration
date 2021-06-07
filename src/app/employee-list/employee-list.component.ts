import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
public employees: IEmployee[] | undefined;
  constructor(private _employeeService:EmployeeServiceService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
    .subscribe(data=> this.employees=data);

  }

}
