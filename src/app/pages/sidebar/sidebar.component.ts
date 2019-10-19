import { Component, OnInit } from '@angular/core';
import { Topics } from '../../core/model/response/topics.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  a: Topics[] = [];

  constructor() {}

  ngOnInit() {
    let b = new Topics();
    b.name = '#traveldotearth';
    b.topicId = '3312312313213';
    this.a.push(b);

    // let c = new Topics();
    // c.name = '#setdfsfsd';
    // c.topicId = '231312313213';
    // this.a.push(c);
    // console.log(this.a);
  }
}
