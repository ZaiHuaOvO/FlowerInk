import { Component, HostListener, OnInit } from '@angular/core';
import { WelcomeService } from './welcome.service';
import { BlogResponse } from '../interfaces/blog';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  data: any[] = [];
  constructor(
    private welcome: WelcomeService,
  ) { }

  ngOnInit() {
    this.welcome.getBlogs().subscribe((res: any) => {
      this.data = res['data']
    })
  }

}
