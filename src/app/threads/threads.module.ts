import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopicPageComponent} from './topic-page/topic-page.component';
import {HttpClientModule} from '@angular/common/http';
import { ThreadsComponent } from './threads.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    TopicPageComponent,
    ThreadsComponent
  ]
})
export class ThreadsModule { }
