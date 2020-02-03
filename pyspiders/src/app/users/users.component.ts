import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  //logic
  users=[{
    name:"naresh",
    company:"Google",
    age:"26",
    doj:new Date(`01-12-2019`),
    desigination:"You tube",
    sal:"15 LPA",
    loc:"Bangalore"
  },
  {
    name:"Prasanth",
    company:"Microsoft",
    age:"26",
    doj:new Date(`01-12-2019`),
    desigination:"CEO",
    sal:"15 LPA",
    loc:"Bangalore"
  },
  {
    name:"Raffi",
    company:"Oracle",
    age:"26",
    doj:new Date(`01-12-2019`),
    desigination:" CEO",
    sal:"15 LPA",
    loc:"Bangalore"
  }
];
  constructor() { }

  ngOnInit() {
  }

}
