import { trigger, transition, style, animate } from '@angular/animations';

// 从隐藏渐出，首页背景用
export const fadeInTranslate = trigger('fadeInTranslate', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms 50ms ease-in-out', style({ opacity: 1 })),
  ]),
  transition(':leave', [animate('100ms ease-out', style({ opacity: 0.6 }))]),
]);

// 从下往上平移渐出,首页大字用
export const TextFadeInTranslate = trigger('TextFadeInTranslate', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate(
      '1000ms 250ms ease-in',
      style({ opacity: 1, transform: 'translateY(0)' })
    ),
  ]),
]);

// 从上往下渐出，首页剪头用
export const ArrowFadeInTranslate = trigger('ArrowFadeInTranslate', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-20px)' }),
    animate(
      '1000ms 500ms ease-in',
      style({ opacity: 1, transform: 'translateY(0)' })
    ),
  ]),
  transition(':leave', [animate('300ms ease-out', style({ opacity: 0 }))]),
]);

// 渐入渐出，首页导航栏用（似乎未生效）
export const slideFade = trigger('slideFade', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-20px)' }),
    animate(
      '300ms ease-out',
      style({ opacity: 1, transform: 'translateY(0)' })
    ),
  ]),
  transition(':leave', [
    animate(
      '300ms ease-out',
      style({ opacity: 0, transform: 'translateY(-20px)' })
    ),
  ]),
]);

// 更加快速的从下往上平移渐出
export const QuickUp = trigger('QuickUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate('250ms ease-in', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);

// 更加快速的从上往下平移
export const QuickDown = trigger('QuickDown', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-20px)' }),
    animate('250ms ease-in', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);

// 更慢的从下往上平移渐出
export const SlowUp = trigger('SlowUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate(
      '500ms 250ms ease-in',
      style({ opacity: 1, transform: 'translateY(0)' })
    ),
  ]),
]);

// 更慢的从上往下平移
export const SlowDown = trigger('SlowDown', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-20px)' }),
    animate(
      '500ms 500ms ease-in',
      style({ opacity: 1, transform: 'translateY(0)' })
    ),
  ]),
]);

// 更加快速的从左往右平移渐出
export const QuickLeft = trigger('QuickLeft', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-20px)' }),
    animate('250ms ease-in', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
]);

// 更加快速的从右往左平移渐出
export const QuickRight = trigger('QuickRight', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(20px)' }),
    animate('250ms ease-in', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
]);

export const SlowLeft = trigger('SlowLeft', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-20px)' }),
    animate(
      '500ms 250ms ease-in',
      style({ opacity: 1, transform: 'translateX(0)' })
    ),
  ]),
]);

export const SlowRight = trigger('SlowRight', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(20px)' }),
    animate(
      '500ms 250ms ease-in',
      style({ opacity: 1, transform: 'translateX(0)' })
    ),
  ]),
]);
