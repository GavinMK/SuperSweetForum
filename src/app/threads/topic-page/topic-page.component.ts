import {Component, Input, OnInit} from '@angular/core';
import {Thread} from '../../models/thread';
import {concat, Observable, Subject} from 'rxjs';
import {ThreadsService} from '../threads.service';

@Component({
  selector: 'app-topic-page',
  templateUrl: './topic-page.component.html',
  styleUrls: ['./topic-page.component.css']
})
export class TopicPageComponent implements OnInit {

  thread$: Observable<Thread[]>;
  term$: Subject<string> = new Subject<string>();

  constructor(private threadService: ThreadsService) { }

  ngOnInit() {
    const initial$ = this.threadService.getMainThreadsbyId();
    const search$ = this.threadService.searchMain(this.term$);
    this.thread$ = concat(initial$, search$);
  }

  trackById(index, thread){
    return thread.id
  }

}
