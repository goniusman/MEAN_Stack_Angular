import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Model/Post';
import { PostService } from 'src/app/services/post/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-show-posts',
  templateUrl: './show-posts.component.html',
  styleUrls: ['./show-posts.component.css'],
})
export class ShowPostsComponent implements OnInit {
  posts: Post[] = [];
  constructor(
    private postService: PostService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((post) => (this.posts = post));
    this.userService.getUserProfile().subscribe((user) => console.log(user));
  }
  deletePost(post: Post) {
    this.postService
      .deletePost(post)
      .subscribe(() =>
        this.posts.filter(
          () =>
            (this.posts = this.posts.filter((item) => item._id !== post._id))
        )
      );
  }
}
