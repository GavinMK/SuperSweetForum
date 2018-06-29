import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import {UserService} from './users/user.service';
import {API_PATH} from './app.tokens';
import {HttpClientModule} from '@angular/common/http';
import {MatModule} from './mat.module';
import {APP_ROUTES} from './app.routes';
import {RouterModule} from '@angular/router';
import {UsersComponent} from './users/users.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersDashboardComponent } from './users/users-dashboard/users-dashboard.component';

import {ThreadsComponent} from './threads/threads.component';
import {TopicPageComponent} from './threads/topic-page/topic-page.component';
import {ThreadDetailsComponent } from './threads/thread-details/thread-details.component';
import {ThreadDetailsPresentationComponent } from './threads/thread-details-presentation/thread-details-presentation.component';

import {ThreadsResolver} from './threads/threads.resolver'
import { ThreadsService } from './threads/threads.service';

import {UsersResolver} from './users/users.resolver';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    UsersDashboardComponent,
    ThreadsComponent,
    TopicPageComponent,
    ThreadDetailsComponent,
    ThreadDetailsPresentationComponent
  ],
  imports: [
    MatModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    FlexLayoutModule
  ],
  providers: [
    UserService,
    ThreadsService,
    { provide: API_PATH, useValue: 'http://localhost:3000'},
    ThreadsResolver,
    UsersResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
