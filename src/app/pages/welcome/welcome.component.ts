import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  data: any[] =[];
  showOverlay: boolean = false;
  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showOverlay = scrollPosition > 0;
  }
  ngOnInit() { 
    this.data = this.generateBlogPosts();
    console.log("🚀 ~ WelcomeComponent ~ ngOnInit ~ this.data:", this.data)

  }



  generateBlogPosts(): any[] {
    const blogPosts = [];

    for (let i = 0; i < 10; i++) {
      const title = this.generateTitle();
      const description = this.generateDescription();
      const content = this.generateContent();
      const likes = Math.floor(Math.random() * 100);
      const views = Math.floor(Math.random() * 1000);
      const date = this.generateRandomDate(new Date(2020, 0, 1), new Date());

      blogPosts.push({
        title,
        description,
        content,
        likes,
        views,
        date
      });
    }

    return blogPosts;
  }

  private generateTitle(): string {
    const titles = ["Angular的性能优化", "React Hooks入门指南", "Vue 3的新特性一览", "Node.js实战", "Python爬虫实践", "JavaScript高级技巧", "TypeScript入门指南", "Web开发趋势预测", "人工智能应用实践", "区块链技术解析"];
    return titles[Math.floor(Math.random() * titles.length)];
  }

  private generateDescription(): string {
    return "用于" + this.generateRandomWord() + "的" + this.generateRandomWord() + "。";
  }

  private generateContent(): string {
    return "前阵子" + this.generateRandomWord() + "说我们的" + this.generateRandomWord() + "项目需要" + this.generateRandomWord() + "开发，但是在开始之前我们需要做一些" + this.generateRandomWord() + "优化。";
  }

  private generateRandomWord(): string {
    const words = ["产品经理", "ERP", "前端", "后端", "移动端", "网站", "应用", "性能", "优化", "开发", "项目", "需求", "功能", "特性", "实践", "指南", "技巧", "预测", "趋势", "应用", "解析", "掌握"];
    return words[Math.floor(Math.random() * words.length)];
  }

  private generateRandomDate(start: Date, end: Date): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
}
