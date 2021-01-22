import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {


  names = [
    "nome1",
    "nome2",
    "nome3",
    "nome4",
    "nome5",
  ]

  cyties = [
    {name:"cidade 1", state:"A1"},
    {name:"cidade 2", state:"A2"},
    {name:"cidade 3", state:"A3"},
    {name:"cidade 4", state:"A4"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
