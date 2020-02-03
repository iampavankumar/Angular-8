import { LoginComponent } from './../auth/login/login.component';

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//httpclent model is depending upon httpclient module 
// so should register Httpclientmodule in app.module.ts
//this service so should use constructor
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
//ngFor directive Exam[ple]
    employees=[
      {
        empID:1,
        empName:"Anu",
        empImg:'https://cdn.pixabay.com/photo/2017/06/22/23/10/landscapes-2432882__340.jpg',
        empSal:"3LPA",
        empComp:"Jspiders",
        empLoc:'Hyd',
        empDOJ: new Date('12/12/2017'),
        empDest:'Devops',
        empEdu:'B.Tech',
        empCol:'Sk University'

      },
      {
        empID:121,
        empName:"manu",
        empImg:'https://cdn.pixabay.com/photo/2017/06/22/23/10/landscapes-2432882__340.jpg',
        empSal:"5LPA",
        empComp:"Oracle",
        empLoc:'Mumbai',
        empDOJ:new Date('12/12/17'),
        empDest:'React',
        EmpEdu:'msc',
        EmpCol:'SVNE'

      },
      {
        empID:143,
        empName:"Prasanth",
        empImg:'https://cdn.pixabay.com/photo/2017/06/22/23/10/landscapes-2432882__340.jpg',
        empSal:"9LPA",
        empComp:"Finistra",
        empLoc:'Bamgalore',
        empDOJ:new Date('12/12/17'),
        empDest:'Automation',
        EmpEdu:'B.Tech',
        EmpCol:'JNTUK'

      },
      {
        empID:167,
        empName:"Nani",
        empImg:'https://cdn.pixabay.com/photo/2017/06/22/23/10/landscapes-2432882__340.jpg',
        empSal:"100000",
        empComp:"TFI",
        empLoc:'Hyd',
        empDOJ:new Date('12/12/17'),
        empDest:'Actor',
        EmpEdu:'MCA',
        EmpCol:'Cafe SHop'

      },
      {
        empID:1510417,
        empName:"manu",
        empImg:'https://cdn.pixabay.com/photo/2017/06/22/23/10/landscapes-2432882__340.jpg',
        empSal:"5LPA",
        empComp:"Oracle",
        empLoc:'Mumbai',
        empDOJ:new Date('12/12/17'),
        empDest:'React',
        EmpEdu:'msc',
        EmpCol:'SVNE'

      }
    ];
  
    // addEmp(){
    //   // alert('working');
    //   this.employees.unshift({
    //     empID:167,
    //     empName:"Anumpama",
    //     empImg:'https://starsunfolded.com/wp-content/uploads/2018/06/Anupama-Parameswaran.jpg',
    //     empSal:"100000",
    //     empComp:"TFI",
    //     empLoc:'Hyd',
    //     empDOJ:new Date('12/12/17'),
    //     empDest:'Actress',
    //     EmpEdu:'MCA',
    //     EmpCol:'google'
    //   })
    // }//for adding data


    // removeEmp(emp){
    //   //first check index
    //   let index=this.employees.indexOf(emp);
    //   this.employees.splice(index,1);
      
    // }//for removing employee


    //ngSwitch case

    color='red';//*ngSwitchCase


//----------HTTPCLIENTMODULE------------//

private base_path="https://jsonplaceholder.typicode.com/posts";
   //first should dependency injection 

   private gitApi="https://api.github.com/users";
  

posts:any[];
gets:any[];//for github
constructor(private http: HttpClient) { 
    this.http.get<any>(this.base_path).subscribe(data =>{
      // console.log(data);
      this.posts=data;//for fakeapi JSONPLACE

    // this.http.get<any>(this.gitApi).subscribe(data=>{
    //   console.log(data);
    //   this.gets=data;
      
    });
}//rxjs observable way to comminuctae rest services


//create api for using post method

addPost(input:HTMLInputElement){
  let post:any={title:input.value};
  this.http.post<any>(this.base_path,post).subscribe(
    res =>{
      post.id=res.id;
      this.posts.splice(0,0,post);
      console.log(res);
      
    },error =>console.log(error)
    
  );
}


//removing data

  removePost(post){
    this.http.delete(`${this.base_path}/${post.id}`).subscribe(
      () =>{
        let index=this.posts.indexOf(post);
        this.posts.splice(index,1);
      }
    );
  }


  ngOnInit() {
    // window.fetch(this.base_path).then(data=>{
    //   data.json().then(item=>{
    //     console.log(item); 
    //   }).catch(err=>{
    //     console.log(err);
        
    //   })
    // }).catch(err=>{
    //   console.log(err);
      
    // })//promise based.....
  }

}
