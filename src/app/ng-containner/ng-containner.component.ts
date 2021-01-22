import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-containner',
  templateUrl: './ng-containner.component.html',
  styleUrls: ['./ng-containner.component.css']
})
export class NgContainnerComponent implements OnInit {

  users=[
    {login:"bob",role:"admin",lastlogin:new Date('2/1/2018')},
    {login:"lia",role:"user",lastlogin:new Date('2/5/2018')},
    {login:"john",role:"admin",lastlogin:new Date('1/2/2018')},
    {login:"robin",role:"user",lastlogin:new Date('9/3/2018')}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
