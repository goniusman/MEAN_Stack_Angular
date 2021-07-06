import { Component, OnInit } from '@angular/core';
import { Post } from '../../../Model/Post';
import { PostService } from '../../../services/post/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  alert: boolean = false;
  title: string;
  description: string;
  image: File;
  category: string;

  constructor(private postService: PostService) {
    // console.log(this.image);
  }

  ngOnInit(): void {}

  onSubmitPostForm() {
    if (!this.title) {
      alert('please provide title');
      return;
    }
    if (!this.description) {
      alert('please provide description');
      return;
    }
    if (!this.category) {
      alert('please provide category');
      return;
    }
    if (!this.image) {
      alert('please provide image');
      return;
    }

    let postData: FormData = new FormData();
    postData.append('title', this.title);
    postData.append('description', this.description);
    postData.append('category', this.category);
    postData.append('file', this.image);
    postData.append('tag', 'all');
    postData.append('author', 'anik');

    this.postService.addPost(postData).subscribe((post) => console.log(post));
    this.alert = true;
  }

  fileChange(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.image = fileList[0];
    }
  }
}
