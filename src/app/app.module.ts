import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UserService} from './users/user.service';
import {API_PATH} from './app.tokens';
import {HttpClientModule} from '@angular/common/http';
import {MatModule} from './mat.module';
import {APP_ROUTES} from './app.routes';
import {RouterModule} from '@angular/router';
import {UsersComponent} from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {ThreadsComponent} from './threads/threads.component';
import {ThreadsService} from './threads/threads.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ThreadDetailsComponent } from './threads/thread-details/thread-details.component';
import { ThreadDetailsPresentationComponent } from './threads/thread-details-presentation/thread-details-presentation.component';
import {ThreadsResolver} from './threads/threads.resolver';
import {TopicPageComponent} from './threads/topic-page/topic-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    ThreadsComponent,
    ThreadDetailsComponent,
    ThreadDetailsPresentationComponent,
    TopicPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    MatModule,
  ],
  providers: [
    UserService,
    ThreadsService,
    ThreadsResolver,
    { provide: API_PATH, useValue: 'http://localhost:3000'}],

  bootstrap: [AppComponent]
})
export class AppModule { }
