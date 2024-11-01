import { Component, HostListener, Input, OnInit } from '@angular/core';
import { SlowUp } from '../../../animations/animation';
import { NzModalService } from 'ng-zorro-antd/modal';
import { LifeDialogComponent } from '../life-dialog/life-dialog.component';

@Component({
  selector: 'app-life-timeline',
  templateUrl: './life-timeline.component.html',
  styleUrls: ['./life-timeline.component.css'],
  animations: [SlowUp],
})
export class LifeTimelineComponent implements OnInit {
  @Input() Data: any[] = [];

  constructor(private modal: NzModalService) {}

  ngOnInit() {}

  getAccentColor(tag: string): string {
    switch (tag) {
      case '日常':
        return '#B3E5FC'; // 淡蓝色
      case '美食':
        return '#FFAB91'; // 橘色
      case '事件':
        return '#FFCDD2'; // 淡红色
      default:
        return '#41516C'; // 默认颜色
    }
  }
  getLifeDetail(i: any): void {
    this.modal.create({
      // nzTitle: '点滴',
      nzContent: LifeDialogComponent,
      nzStyle: { width: '30vw' },
      nzData: i,
      nzCentered: true,
      nzKeyboard: true,
      nzMaskClosable: true,
      nzClosable: false,
      nzFooter: null,
    });
  }
}
