import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

export const APP_ROUTES: Routes = [
  { path: 'users', component: UsersComponent},
  { path: 'users/:id', component: UserDetailComponent},
  { path: '**', redirectTo: '/' }
];

