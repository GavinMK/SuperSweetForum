import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_PATH} from '../app.tokens';
import {Thread} from '../models/thread';
import {debounceTime, distinct, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Injectable()
export class ThreadsService {

  constructor(private http: HttpClient, @Inject(API_PATH) private apiPath) {}

  getThread(id: string){
    return this.http.get(`${this.apiPath}/threads/${id}`);
  }

  getThreads(){
    return this.http.get(`${this.apiPath}/threads`);
  }

  updateThread(thread: Thread){
    return this.http.put(`${this.apiPath}/threads/${thread.id}`, thread);
  }

  rawSearch(term: string){
    return this.http.get(`${this.apiPath}/threadsq?=${term}`)
  }

  search(terms$, debounce = 200){
    //return terms$.pipe(debounceTime(debounce), distinctUntilChanged(), switchMap(terms => this.rawSearch(terms)));
  }






}
