import { Component } from '@angular/core';
import { PostModel } from './news-feed/post-feed/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  
  public newsFeedPosts: PostModel[] = [];

  ngOnInit(): void {
    this.newsFeedPosts = [
      {
        profilePhoto: "photo1",
        name: "name1",
        date: "1 hours ago",
        postText: "Text1",
        postPhoto: "post photo1",
        likeCount: 1,
      } as PostModel,
      {
        profilePhoto: "photo2",
        name: "name2",
        date: "2 hours ago",
        postText: "Text2",
        postPhoto: "post photo2",
        likeCount: 2,
      } as PostModel,
    ];
  }
}
