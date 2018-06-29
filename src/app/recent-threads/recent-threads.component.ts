import { Component, OnInit } from '@angular/core';
import {Thread} from '../models/thread';
import {ThreadsService} from '../threads/threads.service';
import { map, switchMap, startWith, scan, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-recent-threads',
  templateUrl: './recent-threads.component.html',
  styleUrls: ['./recent-threads.component.css']
})
export class RecentThreadsComponent implements OnInit {

  orderStateToogle$ = new Subject<number>()

  recentThreads: Array<Thread> = [];
  orderState: number;

  constructor(private threadsService: ThreadsService) { }

  ngOnInit() {

    this.orderStateToogle$.pipe(
      startWith(1),
      scan(lastValue => lastValue === 1 ? -1 : 1),
      tap((orderState) => {
        this.orderState = orderState;
      }),
      switchMap(value => this.threadsService.getAllThreadsByOrder(value))
    ).subscribe(threads => {
      this.recentThreads = threads;
    })
  }

}
