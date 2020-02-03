import { Injectable } from '@angular/core';


@Injectable({
    providedIn:"root"
})
export class EmailServices{
    getemails(){
        return [
            "pavan@gmail.com",
            "pk@gmail.com",
            "hello@gmail.com",
            "rajkumar@gmail.com",
        ];
    }
}