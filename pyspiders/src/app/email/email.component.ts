import { EmailServices } from '../email.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {


  emailAdress;



  constructor(private email:EmailServices) {
    this.emailAdress=this.email.getemails();
   }

  ngOnInit() {
  }

}
