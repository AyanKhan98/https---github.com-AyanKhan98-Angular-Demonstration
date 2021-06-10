import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';
import{ Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
public employees:any;
public selectedId:any;
  constructor(private _employeeService:EmployeeServiceService,private router:Router, private route : ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this._employeeService.getEmployees()
    .subscribe(data=> this.employees=data);
    this.selectedId=this.route.snapshot.paramMap.get('id');
  }

  onSelect(department: IEmployee)
  {
      //this.router.navigate(['/employeeDetails',department.id]); THIS IS ABSOLUTE NAVIGATION
      this.router.navigate([department.id],{relativeTo: this.route}); //relative routing

  }

  isSelected(employee: any)
  {
    return employee.id === parseInt(this.selectedId);
  }

}
