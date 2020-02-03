import { AbstractControl, ValidationErrors } from '@angular/forms';



export  class usernameValidator{
  static  nospacebetweenusername(control:AbstractControl) :ValidationErrors | null{
      if((control.value as string).indexOf(" ")>=0){
          return {nospacebetweenusername :true}
      }


      else{
          return null;
      }
  }
}   