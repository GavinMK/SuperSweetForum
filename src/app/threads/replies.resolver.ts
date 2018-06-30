import {Injectable} from '@angular/core';
import {Thread} from '../models/thread';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {ThreadsService} from './threads.service';
import {switchMap} from 'rxjs/operators';

@Injectable()
export class ReplyResolver implements Resolve<Thread[]>{
  constructor(private threadService: ThreadsService) {}

  makePath(thread: Thread): string{
    let path: string = `?`;
    thread.replies.forEach( reply => path+=(`&id=${reply}`));
    return path;
}

  resolve(route: ActivatedRouteSnapshot) {
    return this.threadService.getThread(route.paramMap.get('id')).pipe(
      switchMap(thread => this.threadService.getFilteredThreads(this.makePath(thread))));
  }

}
