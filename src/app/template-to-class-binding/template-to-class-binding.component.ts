import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-to-class-binding',
  templateUrl: './template-to-class-binding.component.html',
  styleUrls: ['./template-to-class-binding.component.css']
})
export class TemplateToClassBindingComponent implements OnInit {

  public greeting="";
  public type="";
  public check="";
  public name="";
  constructor() { }

  ngOnInit(): void {
  }
  call()
  {
    alert("call method is called");
  }

  propertyAssignment()
  {
    this.greeting="Welcome"
  }
  eventShower(event: { type: string; })
  {
    console.log(event);
    this.type=event.type;

  }
  consoleLog(value: string)
  {
    this.check="see the console output";
    console.log(value)
  }
}
