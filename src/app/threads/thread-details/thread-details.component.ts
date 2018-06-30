import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Thread} from '../../models/thread';
import {ThreadsService} from '../threads.service';
import {ActivatedRoute, Router} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import {merge, Observable} from 'rxjs';


@Component({
  selector: 'app-thread-details',
  templateUrl: './thread-details.component.html',
  styleUrls: ['./thread-details.component.css']
})
export class ThreadDetailsComponent implements OnInit {

  thread: Thread;
  replies$: Observable<Thread[]>;

  constructor(
    private threadService: ThreadsService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit() {
    this.route.data.pipe(
      map(data => data.thread))
      .subscribe(thread => { this.thread = thread;
    });
    console.log(this.thread.id);
    let path: string = `?`;
    this.thread.replies.forEach( reply => path+=(`&id=${reply}`));
    this.replies$ = this.threadService.getFilteredThreads(path);
  }

  replyBuilder(): void{

  }

  visitReply(event: number): void{
    this.router.navigate(['/threads', event]);
  }

  makeReply(event: number): void{
    this.router.navigate(['/threads', event, 'reply']);
  }

}
