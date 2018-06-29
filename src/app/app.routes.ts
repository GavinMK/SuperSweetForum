import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

export const APP_ROUTES: Routes = [
  { path: 'users', component: UsersDashboardComponent, children: [
    { path: '', redirectTo: '0', pathMatch: 'full'},
    { path: ':id', component: UserDetailComponent},
  ]},
  { path: '**', redirectTo: '/' }
];

