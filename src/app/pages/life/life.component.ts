import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { LifeService } from './life.service';
import {
  QuickLeft,
  QuickRight,
  QuickUp,
  SlowLeft,
  SlowRight,
  SlowUp,
} from '../../animations/animation';
import {
  trigger,
  transition,
  animate,
  keyframes,
  style,
} from '@angular/animations';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { WindowService } from '../../services/window.service';
import { LifeDialogComponent } from './life-dialog/life-dialog.component';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css'],
  animations: [
    QuickLeft,
    QuickRight,
    SlowLeft,
    SlowRight,
    QuickUp,
    SlowUp,
    trigger('fadeInUp', [
      transition(
        ':enter',
        [
          style({ opacity: 0, transform: 'translateY(100px)' }),
          animate(
            '{{ timing }}ms ease-out',
            style({ opacity: 1, transform: 'translateY(0)' })
          ),
        ],
        { params: { timing: 100 } }
      ),
    ]),
  ],
})
export class LifeComponent implements OnInit {
  lifeData: any[] = [];
  lifeDataV2: any[] = [];
  total = 0;
  loading = true;
  yearData: any[] = [];
  tagData: any[] = [];
  order = true;
  isOrder = false;
  year: any = 0;
  tag: any = '';
  switchButton = '揍再花';
  @Input('scrollAnimate') animationTrigger: string = '';
  private isVisible: boolean = true;
  isMobile: boolean = false;
  constructor(
    private lifeService: LifeService,
    private msg: NzMessageService,
    private el: ElementRef,
    private renderer: Renderer2,
    private modal: NzModalService,
    private window: WindowService
  ) {
    this.window.isMobile$.subscribe((isMobile) => {
      this.isMobile = isMobile;
    });
    this.msg.info('检测到狗粮打击，如有不适请及时关闭🌸');
    this.getLifes();

    this.lifeService.getYears().subscribe((res: any) => {
      this.yearData = res['data'];
    });
    this.lifeService.getLifeTags().subscribe((res: any) => {
      this.tagData = res['data'];
    });
  }
  getLifes(): void {
    this.loading = true;
    this.lifeService
      .getLifes(this.tag ? this.tag : '', this.year ? this.year : 0)
      .subscribe((res: any) => {
        this.lifeData = res['data'].data;
        this.total = res['data'].count;
        this.lifeDataV2 = this.groupByYear(this.lifeData);
        this.lifeDataV2.forEach((item) => {
          item.active = false;
        });
        this.lifeDataV2[0].active = true;
        this.loading = false;
      });
  }

  ngOnInit() {}

  orderData(): void {
    this.lifeDataV2 = this.order
      ? this.groupByYear(this.lifeData).reverse()
      : this.groupByYear(this.lifeData);
    this.lifeDataV2.forEach((item) => {
      item.active = false;
    });
    this.lifeDataV2[0].active = true;
    this.order = !this.order;
  }

  switch(): void {
    this.switchButton = '骗你的🤡';
  }

  lifeChanged(e: any): void {
    this.year = e;
    this.getLifes();
  }

  TagChanged(e: any): void {
    this.tag = e;
    this.getLifes();
  }

  ALL(): void {
    this.year = 0;
    this.tag = '';
    this.getLifes();
  }

  getAccentColor(tag: string): string {
    switch (tag) {
      case '日常':
        return '#000B58'; // 淡蓝色
      case '美食':
        return '#FFB26F'; // 橘色
      case '事件':
        return '#A64D79'; // 淡红色
      default:
        return '#1A1A1D'; // 默认颜色
    }
  }

  getLifeDetail(i: any): void {
    this.modal.create({
      // nzTitle: '点滴',
      nzContent: LifeDialogComponent,
      nzStyle: { width: '40vw' },
      nzData: i,
      nzCentered: true,
      nzKeyboard: true,
      nzMaskClosable: true,
      nzClosable: false,
      nzFooter: null,
    });
  }

  getLifeDetailMobile(i: any): void {
    this.modal.create({
      // nzTitle: '点滴',
      nzContent: LifeDialogComponent,
      nzStyle: { width: '100vw' },
      nzData: i,
      nzCentered: true,
      nzKeyboard: true,
      nzMaskClosable: true,
      nzClosable: false,
      nzFooter: null,
    });
  }

  groupByYear(dataArray: any[]): { year: string; data: any[] }[] {
    if (!dataArray || dataArray.length === 0) {
      return [];
    }

    const groupedData: { [key: string]: any[] } = {};

    dataArray.forEach((item) => {
      // 确保 `date` 是一个有效的日期字符串
      const date = new Date(item.date);
      if (isNaN(date.getTime())) {
        console.warn(`Invalid date format for item with id ${item.id}`);
        return;
      }

      const year = date.getFullYear().toString();

      if (!groupedData[year]) {
        groupedData[year] = [];
      }

      groupedData[year].push(item);
    });

    return Object.keys(groupedData)
      .map((year) => ({
        year,
        data: groupedData[year],
      }))
      .reverse();
  }
}
