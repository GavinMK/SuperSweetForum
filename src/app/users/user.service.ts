import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_PATH} from '../app.tokens';
import {User} from '../models/user';
import {tap, filter, map} from 'rxjs/operators';

@Injectable()
export class UserService {

  constructor(private http: HttpClient, @Inject(API_PATH) private apiPath) { }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiPath}/users/${id}`);
  }

  getAllUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${this.apiPath}/users`);
  }

  addUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.apiPath}/users`, user);
  }

  updateUser(user: User): Observable<User>{
    console.log(user);
    return this.http.put<User>(`${this.apiPath}/users/${user.id}`, user);
  }

  getFilteredUsersByName(name: string): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${this.apiPath}/users?q=${name}`);
  }

  getUserByName(name: string): Observable<User>{
    return this.http.get<User>(`${this.apiPath}/users?name=${name}`);
  }

  getUsersByPost(): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiPath}/users?_sort=recentPost&_order=desc`)
  }

}
