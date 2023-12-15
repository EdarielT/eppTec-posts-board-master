import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { IComment } from "../interfaces/post";

@Injectable({
    providedIn: 'root',
  })
  export class CommentService {
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
  
    getComments(): Observable<IComment[]> {
      return this.http
        .get<IComment[]>(this.commentsUrl)
        .pipe(catchError(this.handleError));
    }

    fetchCommentsForPost(postId: number, comments: IComment[]): IComment[] {
        return comments.filter((comment) => comment.postId === postId);
      }
  }