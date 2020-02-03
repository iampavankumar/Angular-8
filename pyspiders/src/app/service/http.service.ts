import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url="https://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient) {

   }

   getPost(){
     return this.http.get<any>(this.url);
   }
   addPost(post){
     return this.http.post(this.url,post);
   }

   deletePost(post){
     return this.http.delete(this.url);

   }

   updatePost(post){
     return this.http.put(this.url,post);
   }
}
