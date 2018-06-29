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
import { UserDetailComponent } from './user-detail/user-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    UsersDashboardComponent
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
    { provide: API_PATH, useValue: 'http://localhost:3000'}],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
