import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      You selected {{departmentId}}
    </p>
    <button (click)="showOverview()">Overview</button>
    <button (click)="showContact()">Contact</button>

    <router-outlet></router-outlet>
    <p>
    <button (click)="goNext()">Next</button>
    <button (click)="goPrevious()">Previous</button>
    </p>
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

  showOverview()
  {
    this.route.navigate(["employeeOverview"],{relativeTo: this.router});
  }

  showContact()
  {
    this.route.navigate(["employeeContact"],{relativeTo: this.router});
  }

}
