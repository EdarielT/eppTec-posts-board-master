import { Injectable } from '@angular/core';
import { IComment, IPost } from '../interfaces/post';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  private commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) {}

  private handleError(err: HttpErrorResponse) {
    let errorMessage: string;
    errorMessage =
      err.error instanceof ErrorEvent
        ? `An error occured: ${err.error.message}`
        : `Server returned code: ${err.status}, error message is: ${err.message}`;
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }

  getPosts(): Observable<IPost[]> {
    return this.http
      .get<IPost[]>(this.postsUrl)
      .pipe(tap(), catchError(this.handleError));
  }

  getComments(): Observable<IComment[]> {
    return this.http
      .get<IComment[]>(this.commentsUrl)
      .pipe(tap(), catchError(this.handleError));
  }
}
