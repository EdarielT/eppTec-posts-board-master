import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'et-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() searchBy: string = '';
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  private _searchInput: string = '';

  ngOnInit(): void {
    this.searchInput = '';
  }

  onChange() {
    this.notify.emit(this.searchInput);
  }

  get searchInput(): string {
    return this._searchInput;
  }
  set searchInput(value: string) {
    this._searchInput = value;
    this.notify.emit(value);
  }
}
