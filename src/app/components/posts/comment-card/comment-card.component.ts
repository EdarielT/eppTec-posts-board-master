import { Component, Input } from '@angular/core';
import { IComment } from '../../../interfaces/post';

@Component({
  selector: 'et-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrl: './comment-card.component.scss',
})
export class CommentCardComponent {
  @Input() comment: IComment | undefined;
  @Input() username: string | undefined;
}
