import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'; //validators for validtion w/o html5
import { usernameValidator } from '../custom.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    form=new FormGroup({
      username:new FormControl("",[
        Validators.required,
      Validators.minLength(3),
      usernameValidator.nospacebetweenusername,//for custom validator
    // Validators.pattern([A-Za-z])
  ]),//value reqried and write in html code
      password:new FormControl("",Validators.required)

    }); //connect in html form whatever name declare same as in html form

    get username() {
      return this.form.get("username");
    }
    get password() {
      return this.form.get("password");
    }
      submit(x){
        console.log(x.value);
        this.form.setErrors({
          invalidLogin:true
        });
        
      }
  constructor() { }

  ngOnInit() {
  }

}
