import { Component } from '@angular/core';
import { QuickUp, SlowUp } from '../../animations/animation';
import { WindowService } from '../../services/window.service';
interface TimelineEntry {
  date: string;
  content: {
    text?: string;
    items?: Array<{
      text: string;
      link?: { text: string; url: string };
      image?: { src: string; width: string; height: string };
      avatar?: { src: string; size: number };
    }>;
  }[];
}
@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrl: './me.component.css',
  animations: [QuickUp],
})
export class MeComponent {
  timelineData: TimelineEntry[] = [
    {
      date: '2023年4月24日',
      content: [
        { text: '产生了想开发个人网站的想法' },
        {
          items: [
            {
              text: '灵感来源于我在下班地铁上看到的一篇文章',
              link: {
                text: '《用零碎时间个人建站》',
                url: 'https://juejin.cn/post/7201730884373168185',
              },
            },
            {
              text: '我在掘金发布了一篇文章：',
              link: {
                text: '《我又又又一次开始规划搭建个人博客网站了》',
                url: 'https://juejin.cn/post/7225430269242425404',
              },
            },
            { text: '这样的想法我已经诞生过无数次了' },
          ],
        },
        { text: '开始规划和拟建静态页面' },
        {
          items: [
            {
              text: '设计功能思维导图（后来删了很多，太过臃肿）',
              image: {
                src: '../../../assets/img/思维导图.png',
                width: '100px',
                height: '50px',
              },
            },
            {
              text: '拟建项目，开发静态页面',
              image: {
                src: '../../../assets/img/初版设计.png',
                width: '100px',
                height: '50px',
              },
            },
          ],
        },
      ],
    },
    {
      date: '2023年5月10日',
      content: [
        { text: '定下后端语言' },
        {
          items: [
            {
              text: '最终选择了',
              avatar: {
                src: 'https://nestjs.bootcss.com/img/logo.png',
                size: 12,
              },
            },
            { text: 'NestJs' },
            { text: 'B站视频+NestJS中文文档+实践' },
          ],
        },
      ],
    },
    {
      date: '······',
      content: [
        { text: '家事+工作繁忙,碎片化时间学习' },
        {
          items: [
            { text: '结婚,买房' },
            { text: '公司项目新增大功能,开发忙碌' },
          ],
        },
      ],
    },
    {
      date: '2024年5月5日',
      content: [
        { text: '设备更新,学有所成' },
        {
          items: [
            {
              text: '公司为我更换了一台更好的笔记本,现在可以在虚拟机上进行Angular18的开发',
            },
            { text: 'NestJS学习基本完成,现在可以在本地进行前后端+数据库开发' },
            {
              text: '定下二次设计',
              image: {
                src: '../../../assets/img/二次设计.png',
                width: '100px',
                height: '50px',
              },
            },
          ],
        },
      ],
    },
    {
      date: '2024年7月29日',
      content: [
        {
          text: '本网站由静态变为动态',
          items: [
            { text: '对接前后端接口' },
            { text: '项目Angular版本更新至 18.1.2' },
          ],
        },
      ],
    },
    {
      date: '2024年7月1日',
      content: [
        { text: '三端项目完成初步功能开发' },
        {
          items: [
            {
              text: '完成首页的初步样式和动画设计（用作想法实现和后期接口测试）',
              image: {
                src: '../../../assets/img/网站主站.png',
                width: '100px',
                height: '50px',
              },
            },
            { text: '加入新字体、新静态图片' },
            {
              text: '第一次前后端数据库联动，在本地发布第一篇博客',
              image: {
                src: '../../../assets/img/第一次发布成功.png',
                width: '100px',
                height: '50px',
              },
            },
          ],
        },
      ],
    },
    {
      date: '2024年8月5日',
      content: [
        { text: '试图加入动态背景设计' },
        {
          items: [
            { text: '集成vanta.js' },
            { text: '博客列表新增CLOUDS 3D动态背景' },
          ],
        },
      ],
    },
    {
      date: '2024年8月8日',
      content: [
        { text: '取消3D动态背景的设计' },
        {
          items: [
            { text: '完成文章列表的样式设计和部分接口对接' },
            { text: '将动画归纳到animation.ts文件中' },
            { text: '为文章列表新增加载动画' },
          ],
        },
      ],
    },
    {
      date: '2024年8月12日',
      content: [
        {
          items: [
            { text: '对接标签、文章数量等接口' },
            { text: '为联系方式新增二维码、跳转等' },
          ],
        },
      ],
    },
    {
      date: '2024年8月15日',
      content: [
        { text: '开发markdown编辑器' },
        {
          items: [
            { text: '调整文章列表样式，参考稀土掘金' },
            { text: '完成文章详情页的开发' },
            { text: '集成ngx-markdown' },
            { text: '计划使用bytemd编辑器（未完成）' },
          ],
        },
      ],
    },
    {
      date: '2024年9月21日',
      content: [
        { text: '手搓markdown样式' },
        {
          items: [
            { text: '调整文章详情的样式，手搓了一套markdown样式设计' },
            { text: '着手开始研究文章列表的样式优化' },
          ],
        },
      ],
    },
    {
      date: '2024年9月23日',
      content: [
        { text: '继续开发文章相关功能' },
        {
          items: [
            { text: '初步定下文章列表的样式设计' },
            { text: '对接网站信息接口' },
          ],
        },
      ],
    },
    {
      date: '2024年9月27日',
      content: [
        { text: '新增点滴功能' },
        { items: [{ text: '优化顶部栏样式' }, { text: '新增点滴页面' }] },
      ],
    },
    {
      date: '2024年9月30日',
      content: [
        { text: '对未来开发方向进行规划' },
        {
          items: [
            { text: '解决mac系统上的兼容性' },
            { text: '构思了部分后续开发设计' },
            { text: '在车上不方便写代码……' },
          ],
        },
      ],
    },
    {
      date: '2024年10月8日',
      content: [
        { text: '优化功能和样式细节' },
        {
          items: [
            { text: '首页重新设计' },
            { text: '新增旅游模块（后续开发）' },
            { text: '文章现在可以筛选多个标签' },
            { text: '新增首页动画，完善样式' },
          ],
        },
      ],
    },
    {
      date: '2024年10月10日',
      content: [
        { text: '云服务器部署' },
        {
          items: [
            { text: '项目成功部署在服务器上，进行兼容性改动' },
            { text: '优化文章列表样式' },
            { text: '在“关于”新增开发日志时间轴' },
          ],
        },
      ],
    },
  ];
  isMobile: boolean = false;
  constructor(private window: WindowService) {
    this.window.isMobile$.subscribe((isMobile) => {
      this.isMobile = isMobile;
    });
  }
}
