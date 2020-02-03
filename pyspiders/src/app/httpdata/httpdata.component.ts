import { HttpService } from './../service/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-httpdata',
  templateUrl: './httpdata.component.html',
  styleUrls: ['./httpdata.component.css']
})
export class HttpdataComponent implements OnInit {

  posts:any[];

  constructor(private customservice:HttpService) { }

  ngOnInit() {
this.customservice.getPost().subscribe(post =>{
  // console.log(post);
  this.posts=post;
})
}


}
