import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUser } from '../../../../interfaces/user';

@Component({
  selector: 'et-filter-author',
  templateUrl: './filter-author.component.html',
  styleUrls: ['./filter-author.component.scss'],
})
export class FilterAuthorComponent implements OnInit {
  usersSub!: Subscription;
  users: IUser[] = [];
  errorMessage: string = '';
  @Input() authors: IUser[] = [];
  @Output() notify: EventEmitter<IUser> = new EventEmitter<IUser>();
  private _filterAuthor: IUser | undefined = undefined;

  ngOnInit(): void {
    this.filterAuthor = undefined;
  }

  onChange() {
    this.notify.emit(this.filterAuthor);
  }

  get filterAuthor(): IUser | undefined {
    return this._filterAuthor;
  }
  set filterAuthor(value: IUser | undefined) {
    this._filterAuthor = value;
    this.notify.emit(value);
  }
}

// [(ngModel)]="authorId"
// (change)="onChange()"
