import { Component, OnInit } from '@angular/core';
import {Thread} from '../models/thread';
import {ThreadsService} from '../threads/threads.service';
import { switchMap, startWith, scan, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-recent-threads',
  templateUrl: './recent-threads.component.html',
  styleUrls: ['./recent-threads.component.css']
})
export class RecentThreadsComponent implements OnInit {

  INITIAL_ORDER_STATE: number = 1;

  orderStateToogle$ = new Subject<number>()

  recentThreads: Array<Thread> = [];
  orderState: number;

  constructor(private threadsService: ThreadsService) { }

  ngOnInit() {

    this.orderStateToogle$.pipe(
      startWith(this.INITIAL_ORDER_STATE),
      scan(lastValue => lastValue === this.INITIAL_ORDER_STATE ? -this.INITIAL_ORDER_STATE : this.INITIAL_ORDER_STATE),
      tap((orderState) => {
        this.orderState = orderState;
      }),
      switchMap(value => this.threadsService.getAllThreadsByOrder(value))
    ).subscribe(threads => {
      this.recentThreads = threads;
    })
  }

}
