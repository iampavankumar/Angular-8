import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apiservices',
  templateUrl: './apiservices.component.html',
  styleUrls: ['./apiservices.component.css']
})
export class ApiservicesComponent implements OnInit {

//  public gitApi="https://api.github.com/users";
//  gitUsers:any[];
//   constructor(private http:HttpClient) { 
//     this.http.get<any>(this.gitApi).subscribe(data =>{
//       // console.log(data);
//       this.gitUsers=data;
//     },error=>{console.log(error);
//     })

//   }


// json fake api

  public base_url="https://jsonplaceholder.typicode.com/posts";
  posts:any[];
  constructor(private http:HttpClient){
    this.http.get<any>(this.base_url).subscribe(data =>{
      // console.log(data);
      this.posts=data;
    },error =>{console.log(error);
    })
  }
  //for adding data into api

  addPost(input:HTMLInputElement){
    let post:any={title:input.value};
    this.http.post<any>(this.base_url,post).subscribe(data =>{
      post.id=data.id;
      this.posts.splice(0,0,post);
    })
  }


//delete post

  deletePost(post){
    this.http.delete<any>(`${this.base_url}/${post.id}`).subscribe( ()=>{
      let index=this.posts.indexOf(post);
      this.posts.splice(index,1);
    });
  }

  ngOnInit() {
  }

}
