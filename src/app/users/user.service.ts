import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_PATH} from '../app.tokens';
import {User} from '../models/user';
import {tap} from 'rxjs/operators';

@Injectable()
export class UserService {

  constructor(private http: HttpClient, @Inject(API_PATH) private apiPath) { }

  getUser(id: string): Observable<Object> {
    return this.http.get(`${this.apiPath}/users/${id}`);
  }

  getAllUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${this.apiPath}/users`);
  }

}
