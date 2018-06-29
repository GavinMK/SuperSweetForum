import { Component, OnInit } from '@angular/core';
import {Thread} from '../models/thread';
import {ThreadsService} from '../threads/threads.service';
import { map, switchMap, startWith } from 'rxjs/operators';
import {FilterTimeOption} from '../models/filter-time-option';
import {FilterTimeOptionService} from '../shared/filter-time-option/filter-time-option.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-recent-threads',
  templateUrl: './recent-threads.component.html',
  styleUrls: ['./recent-threads.component.css']
})
export class RecentThreadsComponent implements OnInit {

  filterTimeOptionChange$ = new Subject<number>()

  recentThreads: Array<Thread> = [];
  filterTimeOptions: Array<FilterTimeOption>;

  constructor(private threadService: ThreadsService,
              private filterTimeOptionService: FilterTimeOptionService) { }

  ngOnInit() {

    this.filterTimeOptionService.getAllFilterTimeOptions().subscribe(filterTimeOptions => {
      this.filterTimeOptions = filterTimeOptions;
    });

    this.filterTimeOptionChange$.pipe(
      startWith(60 * 60 * 1000),
      switchMap(value => this.getFilteredThreadsByMostRecent(value)),
    ).subscribe(threads => {
      this.recentThreads = threads;
    })

  }

  getFilteredThreadsByMostRecent(value: number) {
    return this.threadService.getThreads().pipe(
      map(threads => {
        return threads.filter(thread => {
          return thread.createdDate && ((new Date).getTime() - new Date(thread.createdDate).getTime()) < value;
        });
      })
    )
  }

}
