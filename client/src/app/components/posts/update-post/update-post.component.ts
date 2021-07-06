import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../../services/post/post.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css'],
})
export class UpdatePostComponent implements OnInit {
  updatePost = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl(''),
    tags: new FormControl(''),
  });

  constructor(
    private router: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.postService
      .getCurrentPost(this.router.snapshot.params.id)
      .subscribe((post) => {
        this.updatePost = new FormGroup({
          title: new FormControl(post.title),
          description: new FormControl(post.description),
          category: new FormControl(post.category),
          tag: new FormControl(post.tag),
        });
      });
  }
  onSubmitUpdateForm(): void {
    console.log(this.updatePost.value);
    this.postService
      .updatePost(this.router.snapshot.params.id, this.updatePost.value)
      .subscribe((res) => console.log(res));
  }
}
