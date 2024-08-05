import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import * as THREE from 'three';
import CLOUDS2 from 'vanta/dist/vanta.clouds2.min';

@Component({
  selector: 'VantaBackground',
  templateUrl: './VantaBackground.component.html',
  styleUrls: ['./VantaBackground.component.css'],
})
export class VantaBackgroundComponent implements OnInit, OnDestroy {
  private vantaEffect: any;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.vantaEffect = CLOUDS2({
      el: this.elementRef.nativeElement, // Vanta.js 动画的 DOM 元素
      THREE: THREE, // 使用 three.js
      skyColor: 0x87ceeb, // 天空颜色 (light blue)
      cloudColor: 0xffffff, // 云朵颜色 (white)
      cloudShadowColor: 0x333333, // 云朵阴影颜色
      sunColor: 0xffd700, // 太阳颜色 (gold)
      sunGlareColor: 0xffa500, // 太阳耀斑颜色 (orange)
      sunlightColor: 0xffe4b5, // 太阳光线颜色 (moccasin)
      speed: 0.8, // 动画速度
    });
  }

  ngOnDestroy(): void {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }
}
