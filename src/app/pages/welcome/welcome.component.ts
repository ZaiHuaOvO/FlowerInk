import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { WelcomeService } from './welcome.service';
import { BlogResponse } from '../interfaces/blog';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  animations: [
    // 渐出+向上平移
    trigger('fadeInTranslate', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms 50ms ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('100ms ease-out', style({ opacity: 0.6 })),
      ])
    ]),
    // 大字渐出动画
    trigger('TextFadeInTranslate', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('1000ms 250ms ease-in', style({ opacity: 1, transform: 'translateY(0)' })),
      ])
    ]),
    // 箭头渐出动画
    trigger('ArrowFadeInTranslate', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('1000ms 500ms ease-in', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 })),
      ])
    ]),
    // 导航栏渐入渐出
    trigger('slideFade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0, transform: 'translateY(-20px)' })),
      ])
    ])
  ]
})
export class WelcomeComponent implements OnInit, AfterViewInit {

  // 控制导航栏显示
  isNavbarVisible = false;
  test: number = 0;
  // 获取背景大图的DOM
  @ViewChild('background-image', { static: true }) animateElement!: ElementRef;
  // 获取滚动内容的DOM
  @ViewChild('content', { static: false }) contentRef!: ElementRef;
  // 获取滚动内容的整个DOM
  @ViewChild('scrollableContent', { static: false }) scrollableContentRef!: ElementRef;
  constructor(
    private welcome: WelcomeService,
    private renderer: Renderer2
    ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.renderer.listen(this.scrollableContentRef.nativeElement, 'scroll', () => {
      this.checkContentPosition();
    });
  }

  checkContentPosition() {
    if (this.contentRef && this.contentRef.nativeElement) {
      const contentTop = this.contentRef.nativeElement.getBoundingClientRect().top;
      // 使用窗口高度转换为百分比
      const viewportHeight = window.innerHeight;
      const contentTopPercentage = (contentTop / viewportHeight) * 100;
      this.test = contentTopPercentage
      if (contentTopPercentage < 99) {
        // 只要页面滚动了，就显示导航栏
        this.isNavbarVisible = true;
      } else {
        // 如果内容顶部在视图顶部或更高，就隐藏导航栏
        this.isNavbarVisible = false;
      }
    }
  }

  scrollDown() {
    // 计算 94vh 的像素值
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const scrollOffset = 0.94 * vh;

    // 获取当前的滚动位置
    const currentScroll = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // 计算目标滚动位置
    const targetScroll = currentScroll + scrollOffset;
    console.log('targetScroll: ', targetScroll);

    // 平滑滚动到目标位置
    this.scrollableContentRef.nativeElement.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  }
}
