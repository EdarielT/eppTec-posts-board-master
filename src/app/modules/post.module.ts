import { NgModule } from '@angular/core';
import { PostsListComponent } from '../components/posts/posts-list/posts-list.component';
import { PostPreviewComponent } from '../components/posts/post-preview/post-preview.component';
import { PostDetailComponent } from '../components/posts/post-detail/post-detail.component';
import { RouterModule } from '@angular/router';
import { postDetailGuard } from '../components/posts/post-detail/post-detail.guard';
import { SharedModule } from './shared.module';
import { UserModule } from './user.module';
import { CommentCardComponent } from '../components/posts/comment-card/comment-card.component';

@NgModule({
  declarations: [
    PostsListComponent,
    PostPreviewComponent,
    PostDetailComponent,
    CommentCardComponent,
  ],
  imports: [
    SharedModule,
    UserModule,
    RouterModule.forChild([
      {
        path: 'posts/:id',
        component: PostDetailComponent,
        canActivate: [postDetailGuard],
      },
      { path: 'posts', component: PostsListComponent },
    ]),
  ],
})
export class PostModule {}
