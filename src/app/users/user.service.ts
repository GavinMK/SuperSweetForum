import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_PATH} from '../app.tokens';
import {User} from '../models/user';
import {tap, filter, map} from 'rxjs/operators';
import {LocalStorageService} from '../shared/services/local-storage.service';
import { EventBusService } from '../shared/services/event-bus.service';

@Injectable()
export class UserService {

  USER_LOGGED_KEY: string = 'USER_LOGGED_KEY';

  constructor(private http: HttpClient, @Inject(API_PATH) private apiPath, 
              private localStorage: LocalStorageService, 
              private eventBusService: EventBusService) { }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiPath}/users/${id}`);
  }

  getAllUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${this.apiPath}/users`);
  }

  getFilteredUsersByName(name: string): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${this.apiPath}/users?q=${name}`);
  }

  getUserByName(name: string): Observable<User>{
    return this.http.get<User>(`${this.apiPath}/users?name=${name}`);
  }

  login(username: string, password: string) {
    return this.getUserByName(username).pipe(
      filter(users => !!users || users.length !== 0),
      map(users => users[0]),
      tap(user => {
        this.localStorage.save(this.USER_LOGGED_KEY, user)
      }),
      tap(user => this.eventBusService.emit('LOGIN_SUCCESS', user))
    );
  }

  logout() {
    this.localStorage.remove(this.USER_LOGGED_KEY);
    this.eventBusService.emit('LOGOUT_SUCCESS', {});
  }

  getUserLoggedIn(): null | User {
    return this.localStorage.get<User>(this.USER_LOGGED_KEY);
  }

}
