import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.less']
})
export class NewsFeedComponent implements OnInit {

  @Input()
  public rows: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
