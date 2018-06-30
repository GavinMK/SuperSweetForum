import { Component, OnInit } from '@angular/core';
import { Observable, Subject, concat, merge, combineLatest } from 'rxjs';
import { scan, tap, startWith, share } from 'rxjs/operators';
import { Thread } from '../models/thread';
import { ThreadsService } from '../threads/threads.service';
import { UserService } from '../users/user.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-threads',
  templateUrl: './user-threads.component.html',
  styleUrls: ['./user-threads.component.css']
})
export class UserThreadsComponent implements OnInit {

  thread$: Observable<Thread[]>;
  term$: Subject<string> = new Subject<string>();

  constructor(private threadService: ThreadsService,
              private route: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit() {

    const user$ = this.route.params.pipe(
      switchMap(paramMap => this.userService.getUser(paramMap['id']))
    );

    this.thread$ = user$.pipe(
      switchMap(user => this.threadService.searchByPoster(user.name, this.term$.pipe(
        startWith("")
      )))
    );
  }
  trackById(index, thread){
    return thread.id
  }

}
