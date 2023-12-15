import { Component, Input } from '@angular/core';
import { IUser } from '../../../interfaces/user';

@Component({
  selector: 'et-author-info',
  templateUrl: './author-info.component.html',
  styleUrl: './author-info.component.scss',
})
export class AuthorInfoComponent {
  @Input() author: IUser | undefined;
}
