import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { DiaryComponent } from './pages/diary/diary.component';
import { EchoComponent } from './pages/echo/echo.component';
import { MeComponent } from './pages/me/me.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'home',
    component: WelcomeComponent
  },
  {
    path: 'blog',
    component: BlogsComponent
  },
  {
    path: '随笔',
    component: DiaryComponent
  },
  {
    path: '留言板',
    component: EchoComponent
  },
  {
    path: '关于我',
    component: MeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
