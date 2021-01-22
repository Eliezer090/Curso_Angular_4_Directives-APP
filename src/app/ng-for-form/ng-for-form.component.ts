import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})
export class NgForFormComponent implements OnInit {

  name:String="";
  address:String="";
  phone:String="";
  city:String="";
  age:number=0;

  cyties = [
    {name:"cidade 1", state:"A1"},
    {name:"cidade 2", state:"A2"},
    {name:"cidade 3", state:"A3"},
    {name:"cidade 4", state:"A4"},
  ]

  clients=[]

  constructor() { }

  ngOnInit(): void {
  }

  save(){
    this.clients.push(
      {
      name: this.name,
      address: this.address,
      phone: this.phone,
      city: this.city,
      age: this.age
    });
    console.log(this.clients);
    this.cancel();
  }

  cancel(){
    this.name = "";
    this.address = "";
    this.phone ="";
    this.city = "";
    this.age=0;
  }

  deleteIcon(i){
    this.clients.splice(i,1);
  }
}
