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
  animations: [QuickLeft, QuickRight, SlowLeft, SlowRight, QuickUp, SlowUp],
})
export class LifeComponent implements OnInit {
  lifeData: any[] = [];
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
        this.loading = false;
      });
  }

  ngOnInit() {}

  orderData(): void {
    this.lifeData.reverse();
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
}
