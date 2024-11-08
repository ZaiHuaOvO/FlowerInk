import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { BlogsService } from './blogs.service';
import { API } from '../../services/api';
import { fallback } from '../../data/data';
import { QuickUp, SlowUp } from '../../animations/animation';
import { Blog } from './interfaces/blog';
import { Router } from '@angular/router';
import { WindowService } from '../../services/window.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
  animations: [QuickUp, SlowUp],
})
export class BlogsComponent implements OnInit, OnDestroy {
  blogData: any[] = [];
  total: number = 0;
  blogCount: number = 0;
  tagList: any[] = [];
  loading = true;
  baseUrl = API.BASE_URL;
  fallback = fallback;
  pageIndex = 1;
  totalViews: number = 0;
  selectedTags: string[] = [];
  private vantaEffect: any;
  isMobile: boolean = false;
  constructor(
    private BlogsService: BlogsService,
    private elementRef: ElementRef,
    private router: Router,
    private window: WindowService
  ) {
    this.window.isMobile$.subscribe((isMobile) => {
      this.isMobile = isMobile;
    });

    this.BlogsService.getBlogs({
      page: this.pageIndex,
    }).subscribe((res: any) => {
      this.blogData = res['data'].data;
      this.total = res['data'].count;
      this.blogCount = res['data'].count;
      this.totalViews = res['data'].views;
      this.loading = false;
    });
    // 获取标签
    this.BlogsService.getTags().subscribe((res: any) => {
      this.tagList = res['data'];
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  pageIndexChange(e: any): void {
    this.loading = true;
    this.pageIndex = e;
    this.BlogsService.getBlogs({
      page: this.pageIndex,
    }).subscribe((res: any) => {
      this.blogData = res['data'].data;
      this.loading = false;
    });
  }

  Detail(blog: Blog): void {
    // window.open(`blog-detail/${blog.id}`);
    this.router.navigate(['blog-detail', blog.id]);
  }

  searchByTag(): void {
    this.selectedTags = [];
    this.loading = true;
    this.BlogsService.getBlogs({
      page: this.pageIndex.toString(),
      tag: this.selectedTags,
    }).subscribe((res: any) => {
      this.blogData = res['data'].data;
      this.blogCount = res['data'].count;
      this.loading = false;
    });
  }

  handleChange(checked: boolean, tag: string): void {
    this.loading = true;
    if (checked) {
      this.selectedTags.push(tag);
    } else {
      this.selectedTags = this.selectedTags.filter((t) => t !== tag);
    }
    this.BlogsService.getBlogs({
      page: this.pageIndex.toString(),
      tag: this.selectedTags,
    }).subscribe((res: any) => {
      this.blogData = res['data'].data;
      this.blogCount = res['data'].count;
      this.loading = false;
    });
  }
}
