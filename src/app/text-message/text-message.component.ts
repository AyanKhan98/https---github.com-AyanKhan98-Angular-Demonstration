import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-message',
  templateUrl: './text-message.component.html',
  styleUrls: ['./text-message.component.css']
})
export class TextMessageComponent implements OnInit {
name ='AYAN';
public flag=false;
idAttribrute='ID1';
public isDisabled="true";
public url=window.location.href;
public class1='firstclass';
public class2='secondclass';
public condition='conditionalclass';
public highlightColor="indigo";
public classesObject={
  'firstclass': this.flag,
  'secondclass': !this.flag,
  'conditionalclass' : !this.flag
};
public styleObject={
  "font-style":"italic",
  "background-color":"orange"
}
  constructor() { }

  ngOnInit(): void {
  }

}
