import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-button',
  templateUrl: './life-button.component.html',
  styleUrls: ['./life-button.component.css'],
})
export class LifeButtonComponent implements OnInit {
  @Input() year: any = '';

  constructor() {}

  ngOnInit() {}
}
