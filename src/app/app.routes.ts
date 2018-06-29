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
import {PostCreatorDeactivateGuard} from './threads/post-creator-deactivate-guard.service';

import {UserLoggedResolver} from './shared/resolvers/user-logged.resolver';

import {AppToolbarContainerComponent} from './app-toolbar-container/app-toolbar-container.component';

export const APP_ROUTES: Routes = [
  {
    path: '', component: AppToolbarContainerComponent, resolve: {
      user: UserLoggedResolver
    }, children: [
      { 
        path: 'recent-threads', component: RecentThreadsComponent
      },
      { 
        path: 'users', component: UsersDashboardComponent, children: [
          { 
            path: '', redirectTo: '0', pathMatch: 'full'},
          { 
            path: ':id', component: UserDetailComponent, resolve: {
              user: UsersResolver
          }
        },
      ]},
      { path: '', redirectTo: 'threads', pathMatch: 'full'},
      { path: 'threads', component: ThreadsComponent, children: [
          { path: '', component: TopicPageComponent },
          { path: 'new', component: ThreadCreatorComponent, canDeactivate: [PostCreatorDeactivateGuard] },
          { path: ':id', component: ThreadDetailsComponent, resolve: { thread: ThreadsResolver }},
          { path: ':id/reply', component: ReplyCreatorComponent, resolve: { thread: ThreadsResolver}, canDeactivate: [PostCreatorDeactivateGuard] }
        ] },
      { path: '**', redirectTo: '/' }
  ]}
];

