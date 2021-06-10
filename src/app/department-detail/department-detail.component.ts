import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      You selected {{departmentId}}
    </p>
    <a (click)="goNext()">Next</a>
    <a (click)="goPrevious()">Previous</a>
    <br>
    <button (click)="goDepartment()">Back</button><a>For optional parameter demo</a>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {
public departmentId:any;
  constructor(private router: ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    let id=this.router.snapshot.paramMap.get('id'); 
    this.departmentId=id;
    
  }

  goNext()
  {
    this.departmentId=this.departmentId+1;
    this.route.navigate(["employeeDetails",this.departmentId]);
  }

  goPrevious()
  {
    this.departmentId=this.departmentId-1;
    this.route.navigate(["employeeDetails",this.departmentId]);
  }

  goDepartment()
  {
    let selectedId=this.departmentId?this.departmentId:null;
    //this.route.navigate(["employeeDetails",{id: selectedId}]); sending optional parameter and absoluten routing
    this.route.navigate(["../",{id: selectedId}]);//sending optional route parameter with relative routing
  }

}
