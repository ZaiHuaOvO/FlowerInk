import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-timeline-v2',
  templateUrl: './life-timeline-v2.component.html',
  styleUrls: ['./life-timeline-v2.component.css'],
})
export class LifeTimelineV2Component implements OnInit, AfterViewInit {
  @Input() Data: any[] = [];
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {}
}
