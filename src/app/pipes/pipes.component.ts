import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
public name='Pipe component';
public person={
  name: "JSONDEMON",
  field:"JSON"
};
  constructor() { }

  ngOnInit(): void {
  }

}
