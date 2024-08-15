import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BlogsService } from '../blogs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuickUp } from '../../../animations/animation';
import { Editor, Viewer } from 'bytemd';
import gfm from '@bytemd/plugin-gfm';
import highlight from '@bytemd/plugin-highlight';
import 'bytemd/dist/index.css';
import 'highlight.js/styles/vs.css';
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
  animations: [QuickUp],
})
export class BlogDetailComponent implements OnInit {
  blogData: any;
  loading = true;
  @Input() markdownContent: string = '';
  anchors: Array<{
    children: any;
    href: string;
    title: string;
  }> = [];
  currentAnchor: string | undefined;
  @ViewChild('blog-anchor')
  elementView!: ElementRef;

  @ViewChild('editor') editorElement!: ElementRef;
  editor!: Editor;

  constructor(
    private blogsService: BlogsService,
    private activateInfo: ActivatedRoute,
    private el: ElementRef
  ) {}

  ngOnInit() {
    this.blogsService
      .getBlogDetail(this.activateInfo.snapshot.params['id'])
      .subscribe((res: any) => {
        console.log('res: ', res);
        this.blogData = res['data'];
        this.markdownContent = this.blogData.content;
        this.loading = false;
      });
  }
  generateAnchors(): void {
    const headings = this.el.nativeElement.querySelectorAll('h1, h2, h3, h4');
    this.anchors = [];

    let currentH1: { children: any; href: string; title: string } | null = null;
    let currentH2: { children: any; href: string; title: string } | null = null;
    let currentH3: { children: any; href: string; title: string } | null = null;

    headings.forEach((heading: HTMLElement, index: number) => {
      const id = `heading-${index}`;
      heading.id = id;
      const tagName = heading.tagName.toLowerCase();

      if (tagName === 'h1') {
        currentH1 = { href: `#${id}`, title: heading.innerText, children: [] };
        this.anchors.push(currentH1);
        currentH2 = null; // Reset currentH2 when a new H1 is found
        currentH3 = null; // Reset currentH3 when a new H1 is found
      } else if (tagName === 'h2' && currentH1) {
        currentH2 = { href: `#${id}`, title: heading.innerText, children: [] };
        currentH1.children.push(currentH2);
        currentH3 = null; // Reset currentH3 when a new H2 is found
      } else if (tagName === 'h3' && currentH2) {
        currentH3 = { href: `#${id}`, title: heading.innerText, children: [] };
        currentH2.children.push(currentH3);
      } else if (tagName === 'h4' && currentH3) {
        currentH3.children.push({ href: `#${id}`, title: heading.innerText });
      }
    });
  }

  ngAfterViewInit() {
    this.editor = new Editor(); // 初始化编辑器

    // // 通过 setProps 方法设置属性
    // this.editor.setProps({
    //   target: this.editorElement.nativeElement,
    //   value: this.markdownContent,
    //   plugins: [gfm(), highlight()],
    //   onChange: (value: string) => {
    //     this.markdownContent = value;
    //   },
    // });
  }
}
