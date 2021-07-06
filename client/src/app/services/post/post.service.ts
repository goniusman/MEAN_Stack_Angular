import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Post } from '../../Model/Post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  apiurl = 'http://localhost:5000/api/post';

  constructor(private http: HttpClient) {}

  addPost(post) {
    return this.http.post(this.apiurl, post);
  }

  updatePost(id, post) {
    return this.http.put(this.apiurl + '/' + id, post);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiurl);
  }

  deletePost(post): Observable<Post> {
    return this.http.delete<Post>(this.apiurl + '/' + post._id);
  }

  getCurrentPost(id) {
    return this.http.get<Post>(this.apiurl + '/' + id);
  }
}
