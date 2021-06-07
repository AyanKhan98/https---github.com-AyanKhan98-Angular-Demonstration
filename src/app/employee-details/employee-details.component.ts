import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
public employees:any;
  constructor(private _employeeService:EmployeeServiceService) {
    
   }

  ngOnInit(): void {
    this._employeeService.getEmployees()
    .subscribe(data=> this.employees=data);
  }

}
