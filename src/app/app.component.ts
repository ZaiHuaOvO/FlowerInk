import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { QuickDown } from './animations/animation';
import { WindowService } from './services/window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [QuickDown],
})
export class AppComponent implements AfterViewInit, OnInit {
  // 是否处于首页
  isHomePage: boolean = true;
  // 控制导航栏显示
  isNavbarVisible = false;
  test: number = 0;
  // 获取背景大图的DOM
  @ViewChild('background-image', { static: true }) animateElement!: ElementRef;
  // 获取滚动内容的DOM
  @ViewChild('content', { static: false }) contentRef!: ElementRef;
  // 获取滚动内容的整个DOM
  @ViewChild('scrollableContent', { static: false })
  scrollableContentRef!: ElementRef;
  private vantaEffect: any;
  isMobile: boolean = false;
  isCollapsed: boolean = true;

  data = [
    {
      title: '首页',
      router: '/home',
      content: '网站导航和联系方式',
    },
    {
      title: '文章',
      router: '/blog',
      content: '发布技术相关的博客',
    },
    {
      title: '点滴',
      router: '/life',
      content: '记录和老婆之间的生活日常',
    },
    {
      title: '关于',
      router: '/me',
      content: '介绍网站和我自己',
    },
  ];

  routeText = '';
  constructor(
    private renderer: Renderer2,
    private router: Router,
    private elementRef: ElementRef,
    private window: WindowService
  ) {
    this.window.isMobile$.subscribe((isMobile) => {
      this.isMobile = isMobile;
    });
  }

  ngOnInit(): void {
    // 监听路由变化
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // 检查当前路由路径是否为首页
        this.isHomePage = event.urlAfterRedirects === '/home';
        switch (event.urlAfterRedirects) {
          case '/home':
            this.routeText = ' / 首页';
            break;
          case '/blog':
            this.routeText = ' / 博客';
            break;
          case '/life':
            this.routeText = ' / 点滴';
            break;
          case '/me':
            this.routeText = ' / 关于';
            break;
          default:
            break;
        }
      });
  }

  ngAfterViewInit() {}
}
