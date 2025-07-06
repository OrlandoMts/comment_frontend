import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseItf } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private baseUrl = 'http://localhost:3000/api/comments';

  constructor(private http: HttpClient) {}

  getComments() {
    return this.http.get<ResponseItf<string>[]>(this.baseUrl);
  }

  addComment(text: string) {
    return this.http.post<ResponseItf<string>>(this.baseUrl, { text });
  }
}
