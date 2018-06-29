import { Routes } from '@angular/router';
import { UsersDashboardComponent } from './users/users-dashboard/users-dashboard.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import {ThreadsComponent} from './threads/threads.component';
import {ThreadDetailsComponent} from './threads/thread-details/thread-details.component';

import {ThreadsResolver} from './threads/threads.resolver';
import {TopicPageComponent} from './threads/topic-page/topic-page.component';
import {ThreadCreatorComponent} from './threads/thread-creator/thread-creator.component';
import {ReplyCreatorComponent} from './threads/reply-creator/reply-creator.component';

import {UsersResolver} from './users/users.resolver';
import { RecentThreadsComponent } from './recent-threads/recent-threads.component';

export const APP_ROUTES: Routes = [
  { path: 'recent-threads', component: RecentThreadsComponent },
  { path: 'users', component: UsersDashboardComponent, children: [
    { path: '', redirectTo: '0', pathMatch: 'full'},
    { path: ':id', component: UserDetailComponent, resolve: {
      user: UsersResolver
    }},
  ]},
  { path: '', redirectTo: 'threads', pathMatch: 'full'},
  { path: 'threads', component: ThreadsComponent, children: [
      { path: '', component: TopicPageComponent },
      { path: 'reply', component: ReplyCreatorComponent},
      { path: 'new', component: ThreadCreatorComponent },

      { path: ':id', component: ThreadDetailsComponent, resolve: { thread: ThreadsResolver } },
    ] },
  { path: '**', redirectTo: '/' }
];

