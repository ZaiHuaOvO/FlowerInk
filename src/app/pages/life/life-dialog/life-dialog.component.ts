import { Component, inject, OnInit } from '@angular/core';
import { NZ_MODAL_DATA } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-life-dialog',
  templateUrl: './life-dialog.component.html',
  styleUrls: ['./life-dialog.component.css'],
})
export class LifeDialogComponent implements OnInit {
  nzModalData?: any = inject(NZ_MODAL_DATA);

  textImageData: any[] = [];
  constructor() {
    console.log('nzModalData: ', this.nzModalData);
    let i = 0;
    this.nzModalData.image.forEach((element: any) => {
      if (i < 9) {
        this.textImageData.push(element);
        i++;
      }
    });
  }

  ngOnInit() {}

  getColSpan(totalImages: number, index: number): number {
    if (totalImages === 1) {
      return 24; // 一张图片，占满一整行
    } else if (totalImages === 2) {
      return 12; // 两张图片，各占50%
    } else if (totalImages === 3) {
      return 8; // 三张图片，各占33.33%
    } else if (totalImages === 4) {
      return 12; // 四张图片，两行两列布局，每个占50%
    } else if (totalImages === 5) {
      // 自定义拼凑布局，比如第一个长方形和其他正方形
      return index === 0 ? 16 : 8;
    } else if (totalImages <= 9) {
      return 8; // 九宫格布局，每张图片占1/3
    } else {
      // 更多图片时的默认布局
      return 4; // 每张图片占1/6
    }
  }
}
