import { Component, Input, OnInit } from '@angular/core';
import { PostModel } from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {

  @Input()
  public post: PostModel;

  constructor() { }

  ngOnInit(): void {
  }

}
