import {Injectable} from '@angular/core';
import {Thread} from '../models/thread';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {ThreadsService} from './threads.service';

@Injectable()
export class ThreadsResolver implements Resolve<Thread>{
  constructor(private threadService: ThreadsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.threadService.getThread(route.paramMap.get('id'));
  }

}
