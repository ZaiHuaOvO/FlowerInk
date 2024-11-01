import { Component, inject, OnInit } from '@angular/core';
import { NZ_MODAL_DATA } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-life-dialog',
  templateUrl: './life-dialog.component.html',
  styleUrls: ['./life-dialog.component.css'],
})
export class LifeDialogComponent implements OnInit {
  nzModalData?: any = inject(NZ_MODAL_DATA);
  constructor() {
    console.log('nzModalData: ', this.nzModalData);
  }

  ngOnInit() {}
}
