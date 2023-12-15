import { NgModule } from '@angular/core';
import { AuthorInfoComponent } from '../components/users/author-info/author-info.component';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [AuthorInfoComponent],
  imports: [SharedModule],
  exports: [AuthorInfoComponent],
})
export class UserModule {}
