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

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css'],
  animations: [QuickLeft, QuickRight, SlowLeft, SlowRight],
})
export class LifeComponent implements OnInit {
  lifeData: any[] = [];
  total = 0;
  loading = true;

  @Input('scrollAnimate') animationTrigger: string = '';
  private isVisible: boolean = false;
  constructor(
    private lifeService: LifeService,
    private el: ElementRef,
    private renderer: Renderer2,
    private modal: NzModalService
  ) {
    this.lifeService.getLifes().subscribe((res: any) => {
      this.lifeData = res['data'].data;
      this.total = res['data'].count;
      this.loading = false;
    });
  }

  ngOnInit() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= windowHeight && rect.bottom >= 0) {
      // 如果元素在可视区域内
      if (!this.isVisible) {
        this.isVisible = true;
        this.renderer.addClass(this.el.nativeElement, this.animationTrigger);
      }
    } else {
      // 如果元素在可视区域外
      if (this.isVisible) {
        this.isVisible = false;
        this.renderer.removeClass(this.el.nativeElement, this.animationTrigger);
      }
    }
  }
  getLifeDetail(i: any): void {
    this.modal.create({
      nzTitle: i.title,
      nzContent: i.content,
      nzCloseIcon: '',
      nzFooter: null,
    });
  }
}
