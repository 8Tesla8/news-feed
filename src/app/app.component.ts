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
        profilePhoto: "assets/dog.jpg",
        name: "name1",
        date: "1 hours ago",
        postText: "Text1",
        postPhoto: "assets/nature.jpg",
        likeCount: 1,
      } as PostModel,
      {
        profilePhoto: "assets/dog.jpg",
        name: "name2",
        date: "2 hours ago",
        postText: "Text2",
        postPhoto: null,
        likeCount: 2,
      } as PostModel,
    ];
  }
}
