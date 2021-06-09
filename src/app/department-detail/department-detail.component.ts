import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      You selected {{departmentId}}
    </p>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {
public departmentId:any;
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.router.snapshot.paramMap.get('id');
    this.departmentId=id;
  }

}
