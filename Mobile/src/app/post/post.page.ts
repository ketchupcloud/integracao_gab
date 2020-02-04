import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../services/posts.service';

export interface Post {
	likes:number,
	description: string,
	image: string,
}

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})

export class PostPage implements OnInit {

	post_form: FormGroup;
	post: Post;
  constructor(public fb: FormBuilder, public route: ActivatedRoute, public post_service: PostsService) {
    this.post_form = this.fb.group({
      image: [null],
      description: [null],
      likes: [0]
    })
  }

  ngOnInit() {
    let id: number = Number(this.route.snapshot.paramMap.get('id'));
    if (id !== -1) {
      this.post_service.getPost(id).subscribe((res) => {
        this.post = res.data;
        console.log(this.post)
      })
    } else { this.post = null; }
  }

  addPost():any{
    console.log(this.post_form.value);
		// Ta faltando uma request aqui...
  }

	updatePost():any{
    console.log(this.post_form.value);
		// Ta faltando uma request aqui...
	}

	updateImage():any{
		let value: string = document.getElementById('imageInput').value;
		document.getElementById('imageDisplay').setAttribute('src', value);
	}
}
