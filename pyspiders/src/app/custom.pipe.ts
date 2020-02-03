import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
    name:'gender' // pipename and you can blind with html
})
export class CustomPipe implements PipeTransform{
    transform(value:any,gender:string){
        if(gender.toLowerCase()=="male"){
            return 'Mr'+value;
        }
        else{
            return 'Miss'+value;
        }
    }
}