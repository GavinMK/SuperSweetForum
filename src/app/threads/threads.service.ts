import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_PATH} from '../app.tokens';
import {Thread} from '../models/thread';
import {debounceTime, distinct, distinctUntilChanged, map, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class ThreadsService {

  constructor(private http: HttpClient, @Inject(API_PATH) private apiPath) {}

  getThread(id: string): Observable<Thread>{
    return this.http.get<Thread>(`${this.apiPath}/threads/${id}`);
  }

  getThreads(): Observable<Thread[]>{
    return this.http.get<Thread[]>(`${this.apiPath}/threads`);
  }

  updateThread(thread: Thread): Observable<Thread>{
    return this.http.put<Thread>(`${this.apiPath}/threads/${thread.id}`, thread);
  }

  rawSearch(term: string): Observable<Thread[]>{
    return this.http.get<Thread[]>(`${this.apiPath}/threadsq?=${term}`)
  }

  search(terms$: Observable<string>, debounce = 200): Observable<Thread[]>{
    return terms$.pipe(debounceTime(debounce), distinctUntilChanged(), switchMap(terms => this.rawSearch(terms)));
  }






}
