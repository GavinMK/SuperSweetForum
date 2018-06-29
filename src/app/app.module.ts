import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UserService} from './users/user.service';
import {API_PATH} from './app.tokens';
import {HttpClientModule} from '@angular/common/http';
import {UsersComponent} from './users/users.component';
import {RouterModule} from '@angular/router';
import {MaterialModule} from './materials.module';

import {APP_ROUTES} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    UserService,
    { provide: API_PATH, useValue: 'http://localhost:3000'}],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
