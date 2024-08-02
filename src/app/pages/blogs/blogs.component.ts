import { Component } from '@angular/core';
import { BlogsService } from './blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
})
export class BlogsComponent {
  blogData: any[] = [];
  constructor(private BlogsService: BlogsService) {
    this.BlogsService.getBlogs().subscribe((res: any) => {
      this.blogData = res['data'];
    });
  }
}
