import { Injectable } from '@angular/core';
// import {Posts} from '../models/posts';

import {observable,throwError} from 'rxjs';
import {catchError,retry} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // private post:Posts[]=[ // post the private object that will hold the data 
  //   // posts are array of the class (posts) 
  //   new Posts("aly"),
  //   new Posts("ahmed"),
  //   new Posts("mohamed"),

  // ];
  
  // getAll():Posts[]{
  //   return this.post;
  // }
  // add(pst:Posts){
    
  //   this.post.push(pst);
  
  // }
  constructor() { }
}
