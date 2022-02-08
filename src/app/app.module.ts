import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.components';
import { CourseComponent } from './course/course.component';
import { CourserService } from './courses.service';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { IconComponent } from './icon/icon.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { LikeComponent } from './like/like.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { JsonpostComponent } from './jsonpost/jsonpost.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    IconComponent,
    FavoriteComponent,
    BootstrapPanelComponent,
    LikeComponent,
    PostComponent,
    JsonpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

    
  ],
  providers: [
      CourserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
