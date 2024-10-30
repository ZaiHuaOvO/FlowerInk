import { Component, HostListener, Input, OnInit } from '@angular/core';
import { SlowUp } from '../../../animations/animation';

@Component({
  selector: 'app-life-timeline',
  templateUrl: './life-timeline.component.html',
  styleUrls: ['./life-timeline.component.css'],
  animations: [SlowUp],
})
export class LifeTimelineComponent implements OnInit {
  @Input() Data: any[] = [];

  constructor() {}

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
}
