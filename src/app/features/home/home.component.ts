import { Component, OnInit } from '@angular/core';
import {  PostService } from 'src/app/service/post.service';
import { PublicTenderService } from 'src/app/service/public-tender.service';
import { publicTender } from 'src/app/models/publicTender';
// import {  Posts } from 'src/app/models/posts';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // post:Posts[]; // new array with the same object of the service array 
  constructor(private pstser:PostService,private pupser:PublicTenderService) { }
   pubtendersArr:publicTender[];

   dateNow: Date = new Date();
  // dateNow=new Date();
  ngOnInit()  {
    console.log(this.dateNow.getDate());
    // console.log(new Date(this.dateNow-1));
    this.pupser.getTender().subscribe((data)=>
    {
      console.log(data);
      this.pubtendersArr=data;
    })

    // this.post=this.pstser.getAll();
    // console.log(this.post);
  }

}
