import { Component } from '@angular/core';
import { QuickUp, SlowUp } from '../../animations/animation';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrl: './me.component.css',
  animations: [QuickUp],
})
export class MeComponent {}
