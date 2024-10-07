import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { MeComponent } from './pages/me/me.component';
import { BlogDetailComponent } from './pages/blogs/blog-detail/blog-detail.component';
import { LifeComponent } from './pages/life/life.component';
import { TravelComponent } from './pages/travel/travel.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'home',
    component: WelcomeComponent,
  },
  {
    path: 'blog',
    component: BlogsComponent,
  },
  {
    path: 'blog-detail/:id',
    component: BlogDetailComponent,
  },
  {
    path: 'life',
    component: LifeComponent,
  },
  {
    path: 'me',
    component: MeComponent,
  },
  {
    path: 'travel',
    component: TravelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
