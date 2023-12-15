import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComment, IPost } from '../../../interfaces/post';
import { Subscription } from 'rxjs';
import { PostService } from '../../../services/post.service';
import { CommentService } from '../../../services/comment.service';
import { UserService } from '../../../services/user.service';
import { IUser } from '../../../interfaces/user';

@Component({
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss',
})
export class PostDetailComponent implements OnInit, OnDestroy {
  postId: number = 0;
  comments: IComment[] = [];
  users: IUser[] = [];
  post: IPost | undefined;
  author: IUser | undefined;
  commentsSub!: Subscription;
  postsSub!: Subscription;
  usersSub!: Subscription;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private commentService: CommentService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.postId = Number(this.route.snapshot.paramMap.get('id'));
    this.postsSub = this.postService.getPosts().subscribe({
      next: (posts) => {
        this.post = posts.find((post) => post.id === this.postId);
      },
    });

    this.commentsSub = this.commentService.getComments().subscribe({
      next: (comments) => {
        this.comments = comments.filter(
          (comment) => comment.postId === this.postId
        );
      },
      error: (err) => (this.errorMessage = err),
    });

    this.usersSub = this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.author = users.find((user) => user.id === this.post?.userId);
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  getCommentAuthor(commentId: number): string | undefined {
    let commentEmail = this.comments.find(
      (comment) => comment.id === commentId
    )?.email;
    let authorUsername = this.users.find(
      (user) => user.email === commentEmail
    )?.username;
    let usernameFromEmail = commentEmail?.split('@')[0];
    return authorUsername ?? usernameFromEmail;
  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
    this.commentsSub.unsubscribe();
    this.usersSub.unsubscribe();
  }
}
