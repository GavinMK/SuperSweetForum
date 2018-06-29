import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {ThreadsComponent} from './threads/threads.component';
import {ThreadDetailsComponent} from './threads/thread-details/thread-details.component';
import { AppComponent } from './app.component';
import {ThreadsResolver} from './threads/threads.resolver';
import {TopicPageComponent} from './threads/topic-page/topic-page.component';
import {ThreadCreatorComponent} from './threads/thread-creator/thread-creator.component';
import {ReplyCreatorComponent} from './threads/reply-creator/reply-creator.component';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'threads', pathMatch: 'full'},
  { path: 'threads', component: ThreadsComponent, children: [
      { path: '', component: TopicPageComponent },
      { path: 'reply', component: ReplyCreatorComponent},
      { path: 'new', component: ThreadCreatorComponent },
      { path: ':id', component: ThreadDetailsComponent, resolve: { thread: ThreadsResolver } },
    ] },
  { path: 'users', component: UsersComponent},
  { path: 'users/:id', component: UserDetailComponent},
  { path: '**', redirectTo: '/' }
];

