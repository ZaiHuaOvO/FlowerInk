import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class WindowService {
  private isMobileSubject = new BehaviorSubject<boolean>(false);
  public isMobile$ = this.isMobileSubject.asObservable();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object // 注入 PLATFORM_ID 以检测运行平台
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.checkViewportWidth();

      // 监听窗口大小变化，仅在浏览器环境中执行
      fromEvent(window, 'resize')
        .pipe(
          debounceTime(200),
          map(() => this.checkViewportWidth())
        )
        .subscribe();
    } else {
      // 在服务器端，您可以设置一个默认值，例如 false
      this.checkViewportWidth();
    }
  }

  private checkViewportWidth(): void {
    if (isPlatformBrowser(this.platformId)) {
      const isMobile = window.innerWidth <= 768;
      this.isMobileSubject.next(isMobile);
    }
  }
}
