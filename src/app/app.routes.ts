import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {ThreadsComponent} from './threads/threads.component';
import {ThreadDetailsComponent} from './threads/thread-details/thread-details.component';
import {AppComponent} from './app.component';
import {ThreadsResolver} from './threads/threads.resolver';
import {TopicPageComponent} from './threads/topic-page/topic-page.component';

export const APP_ROUTES: Routes = [
  { path: '', component: ThreadsComponent, children: [
      { path: 'threads', component: TopicPageComponent },
      { path: 'threads/:id', component: ThreadDetailsComponent, resolve: { thread: ThreadsResolver } },
    ] },
  { path: 'users', component: UsersComponent},
  { path: 'users/:id', component: UserDetailComponent},
  { path: '**', redirectTo: '/' }
];

