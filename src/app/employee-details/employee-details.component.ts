import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';
import{ Router} from '@angular/router'

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
public employees:any;
  constructor(private _employeeService:EmployeeServiceService,private router:Router) {
    
   }

  ngOnInit(): void {
    this._employeeService.getEmployees()
    .subscribe(data=> this.employees=data);
  }

  onSelect(department: IEmployee)
  {
      this.router.navigate(['/department',department.id]);

  }

}
