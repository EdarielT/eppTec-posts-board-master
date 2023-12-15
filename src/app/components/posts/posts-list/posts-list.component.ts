import { Component, OnDestroy, OnInit } from '@angular/core';
import { IComment, IPost } from '../../../interfaces/post';
import { PostService } from '../../../services/post.service';
import { IUser } from '../../../interfaces/user';
import { UserService } from '../../../services/user.service';
import { Subscription } from 'rxjs';
import { CommentService } from '../../../services/comment.service';

@Component({
  selector: 'et-posts',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit, OnDestroy {
  filteredPosts: IPost[] = [];
  filteredPostsBySearch: IPost[] = [];
  filteredPostsByAuthor: IPost[] = [];
  posts: IPost[] = [];
  comments: IComment[] = [];
  users: IUser[] = [];
  errorMessage: string = '';
  postsSub!: Subscription;
  commentsSub!: Subscription;
  usersSub!: Subscription;

  constructor(
    private postService: PostService,
    private userService: UserService,
    private commentService: CommentService,
  ) {}

  ngOnInit(): void {
    this.postsSub = this.postService.getPosts().subscribe({
      next: (posts) => {
        this.posts = posts;
        this.filteredPostsBySearch = this.posts;
        this.filteredPostsByAuthor = this.posts;
        this.getFilteredPosts();
      },
      error: (err) => (this.errorMessage = err),
    });

    this.commentsSub = this.commentService.getComments().subscribe({
      next: (comments) => {
        this.comments = comments;
      },
      error: (err) => (this.errorMessage = err),
    });

    this.usersSub = this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  onNotify(searchValue: string, author?: IUser): void {
    this.filterPostsBySearchInput(searchValue);
    this.filterPostsByAuthorId(author);
  }

  filterPostsBySearchInput(searchValue: string): void {
    if (searchValue) {
      searchValue = searchValue.toLocaleLowerCase();
      this.filteredPostsBySearch = this.posts.filter((post: IPost) =>
        post.title.toLocaleLowerCase().includes(searchValue)
      );
    } else {
      this.filteredPostsBySearch = this.posts;
    }
    this.getFilteredPosts();
  }

  filterPostsByAuthorId(author?: IUser): void {
    this.filteredPostsByAuthor = author?.id
      ? this.filteredPostsBySearch.filter(
          (post: IPost) => post.userId === author.id
        )
      : this.filteredPostsBySearch;
    this.getFilteredPosts();
  }

  getFilteredPosts(): IPost[] {
    return (this.filteredPosts = this.filteredPostsBySearch.filter((post) =>
      this.filteredPostsByAuthor.includes(post)
    ));
  }

  authorName(authorId: number): string {
    let author = this.users.find((user) => user.id === authorId);
    return author?.name || 'Anonym';
  }

  postComments(postId: number): IComment[] {
    return this.commentService.fetchCommentsForPost(postId, this.comments);
  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
    this.commentsSub.unsubscribe();
    this.usersSub.unsubscribe();
  }
}
