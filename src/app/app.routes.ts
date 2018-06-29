import { Routes } from '@angular/router';
import { UsersDashboardComponent } from './users/users-dashboard/users-dashboard.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import {ThreadsComponent} from './threads/threads.component';
import {ThreadDetailsComponent} from './threads/thread-details/thread-details.component';
import {ThreadsResolver} from './threads/threads.resolver';
import {TopicPageComponent} from './threads/topic-page/topic-page.component';

import {UsersResolver} from './users/users.resolver';
import { RecentThreadsComponent } from './recent-threads/recent-threads.component';

export const APP_ROUTES: Routes = [
  { path: 'recent-posts', component: RecentThreadsComponent },
  { path: 'users', component: UsersDashboardComponent, children: [
    { path: '', redirectTo: '0', pathMatch: 'full'},
    { path: ':id', component: UserDetailComponent, resolve: {
      user: UsersResolver
    }},
  ]},
  { path: 'threads', component: ThreadsComponent, children: [
      { path: '', component: TopicPageComponent },
      { path: ':id', component: ThreadDetailsComponent, resolve: { thread: ThreadsResolver } },
    ] },
  { path: '**', redirectTo: '/' }
];

