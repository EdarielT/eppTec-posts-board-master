import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../components/general/search/search.component';
import { FormsModule } from '@angular/forms';
import { FilterAuthorComponent } from '../components/general/filters/filter-author/filter-author.component';
import { DropdownDirective } from '../directives/dropdown.directive';
import { BackButtonComponent } from '../components/general/buttons/back-button.component';

@NgModule({
  declarations: [SearchComponent, FilterAuthorComponent, DropdownDirective, BackButtonComponent],
  imports: [CommonModule, FormsModule],
  exports: [
    CommonModule,
    FormsModule,
    SearchComponent,
    FilterAuthorComponent,
    DropdownDirective,
    BackButtonComponent,
  ],
})
export class SharedModule {}
