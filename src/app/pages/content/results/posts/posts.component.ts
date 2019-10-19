import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts = [
    {
      postId: '106291200758211_130774231643241',
      platform: 'FACEBOOK',
      pageId: '106291200758211',
      publishedOn: '2019-10-01T12:57:18.000+0000',
      lastUpdatedOn: '2019-10-01T13:43:44.000+0000',
      totalNumberOfLikes: 1,
      totalNumberOfComments: 0,
      content: 'page test post 1 #kudos TestPage1',
      attachmentUrl: [
        'https://www.facebook.com/106291200758211/photos/a.130814684972529/130814658305865/?type=3'
      ],
      picture:
        // tslint:disable-next-line: max-line-length
        'https://scontent.xx.fbcdn.net/v/t1.0-0/s130x130/72073168_130814661639198_1647421911396777984_n.png?_nc_cat=102&_nc_oc=AQmbY2hHuz7vnm0sdVRX_xXI_AX9E2k_N6706QUv9msQlk8OL-enzK9nf8-FeQh_Mrs&_nc_ht=scontent.xx&oh=0c488b547dd6d342f49183061e47d3a5&oe=5E37CEE5'
    },
    {
      postId: '106291200758211_138810057506325',
      platform: 'FACEBOOK',
      pageId: '106291200758211',
      publishedOn: '2019-10-14T14:05:21.000+0000',
      lastUpdatedOn: '2019-10-14T14:05:21.000+0000',
      totalNumberOfLikes: 1,
      totalNumberOfComments: 0,
      content: 'Test post 2',
      attachmentUrl: null,
      picture: null
    },
    {
      postId: '106291200758211_138811067506224',
      platform: 'FACEBOOK',
      pageId: '106291200758211',
      publishedOn: '2019-10-14T14:06:56.000+0000',
      lastUpdatedOn: '2019-10-14T14:15:49.000+0000',
      totalNumberOfLikes: 0,
      totalNumberOfComments: 1,
      content: 'test 3',
      attachmentUrl: null,
      picture: null
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
