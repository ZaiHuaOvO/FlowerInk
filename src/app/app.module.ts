import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { NgZorroModule } from './ng-zorro.module';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { MeComponent } from './pages/me/me.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogDetailComponent } from './pages/blogs/blog-detail/blog-detail.component';
import { MarkdownModule } from 'ngx-markdown';
import { LifeComponent } from './pages/life/life.component';
import { TravelComponent } from './pages/travel/travel.component';
import { LifeTimelineComponent } from './pages/life/life-timeline/life-timeline.component';
import { LifeDialogComponent } from './pages/life/life-dialog/life-dialog.component';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,

    BlogsComponent,
    BlogDetailComponent,
    LifeComponent,
    MeComponent,
    WelcomeComponent,
    TravelComponent,
    LifeTimelineComponent,
    LifeDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    NgZorroModule,
    MarkdownModule.forRoot(),
    BrowserAnimationsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
