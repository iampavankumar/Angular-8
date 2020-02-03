import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }
  employees=[
    {
      emp_id:"qya125",
      emp_name:"pavan",
      emp_company:"TFI",
      emp_sal:"100000",
      emp_des:"Actor",
      emp_DOJ:new Date("2016 09 01"),
      emp_loc:"bangalore",
      emp_gen:"male"
    },
    {
      emp_id:"goog12905",
      emp_name:"alexa",
      emp_company:"CGI",
      emp_sal:"200000",
      emp_des:"Angular",
      emp_DOJ:new Date("2016 09 01"),
      emp_loc:"bangalore",
      emp_gen:"female"
    },
    {
      emp_id:"goohgt98",
      emp_name:"pavan",
      emp_company:"TFI",
      emp_sal:"100000",
      emp_des:"actor",
      emp_DOJ:new Date("2016 09 01"),
      emp_loc:"bangalore",
      emp_gen:"male"
    },
    {
      emp_id:"ty189",
      emp_name:"shashi",
      emp_company:"TY",
      emp_sal:"100000",
      emp_des:"Full stack",
      emp_DOJ:new Date("2016 09 01"),
      emp_loc:"bangalore",
      emp_gen:"male"
    }
  ]

  ngOnInit() {
  }

}
