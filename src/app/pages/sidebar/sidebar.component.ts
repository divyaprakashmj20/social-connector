import { Component, OnInit } from '@angular/core';
import { Topics } from '../../core/model/response/topics.model';
import { TopicsService } from './../../core/services/topics.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  a: Topics[] = [];

  constructor(public topicsService: TopicsService) {}

  ngOnInit() {

    this.topicsService.getTopics().subscribe(i=>{
      // console.log(i);
      this.a = i['topics'];
      console.log(this.a);
    });

  }
}
