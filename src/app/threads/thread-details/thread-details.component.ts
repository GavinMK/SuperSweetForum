import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Thread} from '../../models/thread';
import {ThreadsService} from '../threads.service';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-thread-details',
  templateUrl: './thread-details.component.html',
  styleUrls: ['./thread-details.component.css']
})
export class ThreadDetailsComponent implements OnInit {

  thread: Thread;

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
  }

  makeReply(): void{
    this.router.navigate(['reply'], { relativeTo: this.route });
  }

}
