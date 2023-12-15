import { Component, Input } from '@angular/core';
import { IPost } from '../../../interfaces/post';
import { Router } from '@angular/router';

@Component({
  selector: 'et-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss'],
})
export class PostPreviewComponent {
  constructor(private router: Router) {}

  @Input() post: IPost = {
    title: '',
    body: '',
    userId: 0,
    id: 0,
  };
  @Input() authorName: string = 'Anonym';
  @Input() numberOfComments: number = 0;

  redirectToTargetRoute(id: number) {
    this.router.navigate([`/posts/${id}`]);
  }
}
