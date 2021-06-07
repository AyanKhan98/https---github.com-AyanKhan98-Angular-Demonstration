import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
//import * as EventEmitter from 'events';

@Component({
  selector: 'app-interacter-component',
  templateUrl: './interacter-component.component.html',
  styleUrls: ['./interacter-component.component.css']
})
export class InteracterComponentComponent implements OnInit {
  @Input('parentData') public name : string | undefined;
  @Output() public childEvent=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  fireEvent()
  {
    this.childEvent.emit("Emitting this");
  }

}
