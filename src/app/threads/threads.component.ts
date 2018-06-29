import { Component, OnInit } from '@angular/core';
import {ThreadsService} from './threads.service';
import {Thread} from '../models/thread';
import {concat, Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {

  thread$: Observable<Thread[]>;
  term$: Subject<string> = new Subject<string>();

  constructor(private threadService: ThreadsService) { }

  ngOnInit() {
    const initial$ = this.threadService.getThreads();
    const search$ = this.threadService.search(this.term$);
    this.thread$ = concat(initial$, search$);

  }

  trackById(index, thread){
    return thread.id
  }

}
