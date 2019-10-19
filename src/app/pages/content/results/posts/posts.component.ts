import { Component, OnInit } from '@angular/core';
import { PostService } from './../../../../core/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts = [];

  constructor(public postService: PostService) { }

  ngOnInit() {
    this.postUpdate();
  }

  postUpdate(){
    this.postService.getPost().subscribe(i=>{
      console.log(i);
      this.posts = i['posts'];
    });
  }

  refresh(){
    this.postUpdate();
  }

}
