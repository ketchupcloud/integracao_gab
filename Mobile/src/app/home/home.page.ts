import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	posts: any[]
	constructor(public posts_service: PostsService) {
		this.getPosts();
	}

	getPosts():any{
		this.posts_service.getPosts().subscribe((res) => {
			this.posts = res.data;
			console.log(res.data)
		})
	}

	deletePost(id:number){
		console.log(id);
		// Falta uma requisição aqui...
	}
}
