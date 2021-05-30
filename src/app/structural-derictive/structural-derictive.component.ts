import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-derictive',
  templateUrl: './structural-derictive.component.html',
  styleUrls: ['./structural-derictive.component.css']
})
export class StructuralDerictiveComponent implements OnInit {
public ngcheck=false;
public ngcheck1=false;
public color="White";
public colors=["red","yellow","green"];
  constructor() { }

  ngOnInit(): void {
  }
toggle()
{
  this.ngcheck=true;
}

toggle1()
{
  if(this.ngcheck1==false)
  this.ngcheck1=true;
  else
  this.ngcheck1=false;
}
colorPicker(value: string)
{
  this.color=value;
}
}
