import { Component, Input, OnInit } from "@angular/core";
import { PostModel } from "./post-feed/post.model";

@Component({
  selector: "app-news-feed",
  templateUrl: "./news-feed.component.html",
  styleUrls: ["./news-feed.component.less"],
})
export class NewsFeedComponent implements OnInit {
  
  @Input()
  public posts: PostModel[] = [];

  constructor() {}

  ngOnInit(): void {
  }
}
