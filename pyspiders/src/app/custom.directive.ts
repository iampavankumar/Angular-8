import {ElementRef ,Directive, HostListener, HostBinding  } from '@angular/core';



@Directive({
    selector:'[color]'
})
export class customDirective{
    constructor(el:ElementRef){
        el.nativeElement.style.background="orange";
        el.nativeElement.style.padding='10px';
        el.nativeElement.style.border='1px solid yellow';
        el.nativeElement.style.borderRadius='10px';
        el.nativeElement.style.color='white';
    }
    // @HostListener("click") clickEvent(){
    //     alert("hello host");
    // }

    @HostBinding("style.background") background='blue';



    @HostListener("mouseenter") mouseEnter(){
        console.log("mouse entered");
        this.background='hotpink';
    }
        
    @HostListener("mouseleave") x(){
        console.log("mouse leave ..");
        this.background='yellow';
        
    }
}