import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_PATH} from '../app.tokens';
import {Thread} from '../models/thread';
import {debounceTime, tap, distinctUntilChanged, map, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

interface postsInterface { num: number }

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

  addThread(thread: Thread): Observable<Thread>{
    return this.http.post<Thread>(`${this.apiPath}/threads`, thread);
  }

  rawSearch(term: string): Observable<Thread[]>{
    return this.http.get<Thread[]>(`${this.apiPath}/threads?q=${term}`)
  }

  rawSearchByPoster(poster: string, term: string): Observable<Thread[]>{
    return this.http.get<Thread[]>(`${this.apiPath}/threads?poster=${poster}&&q=${term}`)
  }

  search(terms$: Observable<string>, debounce = 200): Observable<Thread[]>{
    return terms$.pipe(debounceTime(debounce), distinctUntilChanged(), switchMap(terms => this.rawSearch(terms)), tap(console.log));
  }

  searchByPoster(poster: string, terms$: Observable<string>, debounce = 200): Observable<Thread[]> {
    return terms$.pipe(debounceTime(debounce), distinctUntilChanged(), switchMap(terms => this.rawSearchByPoster(poster, terms)), tap(console.log));
  }

  getAllThreadsByOrder(order: number) {
    return this.getThreads().pipe(
      map(threads => {
        const sortedThreads = threads.sort((firstThread, secondThread) => {
          if (firstThread.id === secondThread.id) {
            return 0;
          }
          return firstThread.id < secondThread.id ? 1 : -1;
        });
        return order > 0 ? sortedThreads.reverse() : sortedThreads;
      })
    )
  }

  getAllThreadsForGivenUsername(username: string): Observable<Thread[]> {
    return this.getThreads().pipe(
      map(threads => {
        return threads.filter((thread) => {
          return thread.poster === username;
        })
      })
    )
  }
}
