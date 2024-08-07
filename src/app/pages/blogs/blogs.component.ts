import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { BlogsService } from './blogs.service';
import { API } from '../../services/api';
import { fallback } from '../../data/data';
import { QuickUp } from '../../animations/animation';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
  animations: [QuickUp],
})
export class BlogsComponent implements OnInit, OnDestroy {
  blogData: any[] = [];
  loading = true;
  baseUrl = API.BASE_URL;
  fallback = fallback;
  private vantaEffect: any;
  constructor(
    private BlogsService: BlogsService,
    private elementRef: ElementRef
  ) {
    this.BlogsService.getBlogs().subscribe((res: any) => {
      this.blogData = res['data'];
      setTimeout(() => {
        this.loading = false;
      }, 500);
    });
  }

  ngOnInit(): void {
    // this.vantaEffect = CLOUDS({
    //   el: this.elementRef.nativeElement, // Vanta.js 动画的 DOM 元素
    //   // THREE: THREE, // 使用 three.js，注：个人感觉不用会更好看
    //   skyColor: 0x68b8d7, // 天空颜色 (light blue)
    //   cloudColor: 0xadc1de, // 云朵颜色 (white)
    //   cloudShadowColor: 0x183550, // 云朵阴影颜色
    //   sunColor: 0xff9919, // 太阳颜色 (gold)
    //   sunGlareColor: 0xff6633, // 太阳眩光颜色 (orange)
    //   sunlightColor: 0xff9933, // 阳光颜色 (moccasin)
    //   speed: 0.8, // 动画速度
    // });
  }

  ngOnDestroy(): void {
    // if (this.vantaEffect) this.vantaEffect.destroy();
  }
}
