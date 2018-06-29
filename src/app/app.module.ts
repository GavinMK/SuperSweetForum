import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UserService} from './users/user.service';
import {API_PATH} from './app.tokens';
import {HttpClientModule} from '@angular/common/http';
import {MatModule} from './mat.module';
import {APP_ROUTES} from './app.routes';
import {RouterModule} from '@angular/router';
import {UsersComponent} from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {ThreadsComponent} from './threads/threads.component';
import {ThreadsService} from './threads/threads.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ThreadDetailsComponent } from './threads/thread-details/thread-details.component';
import { ThreadDetailsPresentationComponent } from './threads/thread-details-presentation/thread-details-presentation.component';
import {ThreadsResolver} from './threads/threads.resolver';
import {TopicPageComponent} from './threads/topic-page/topic-page.component';
import { ThreadCreatorComponent } from './threads/thread-creator/thread-creator.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule} from '@angular/flex-layout';
import { UsernameValidatorDirective } from './threads/username-validator.directive';
import { ReplyCreatorComponent } from './threads/reply-creator/reply-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    ThreadsComponent,
    ThreadDetailsComponent,
    ThreadDetailsPresentationComponent,
    TopicPageComponent,
    ThreadCreatorComponent,
    UsernameValidatorDirective,
    ReplyCreatorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES),
    MatModule,
    FlexLayoutModule
  ],
  providers: [
    UserService,
    ThreadsService,
    ThreadsResolver,
    { provide: API_PATH, useValue: 'http://localhost:3000'}],

  bootstrap: [AppComponent]
})
export class AppModule { }
