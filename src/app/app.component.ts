import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public prop='Parents message';
  public childData:any;
}
