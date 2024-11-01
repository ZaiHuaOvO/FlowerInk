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
  year: any = '';
  tag: any = '';
  switchButton = '揍再花';
  @Input('scrollAnimate') animationTrigger: string = '';
  private isVisible: boolean = true;
  constructor(
    private lifeService: LifeService,
    private msg: NzMessageService,
    private el: ElementRef,
    private renderer: Renderer2,
    private modal: NzModalService
  ) {
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

  getLifeDetail(i: any): void {
    this.modal.create({
      nzTitle: i.title,
      nzContent: i.content,
      nzCloseIcon: '',
      nzFooter: null,
    });
  }

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
}
