import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Reply, Thread} from '../../models/thread';
import {ThreadsService} from '../threads.service';
import {map, switchMap} from 'rxjs/operators';
import {waitForMap} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-reply-creator',
  templateUrl: './reply-creator.component.html',
  styleUrls: ['./reply-creator.component.css']
})
export class ReplyCreatorComponent implements OnInit {

  thread: Thread;
  form: FormGroup;
  saved: boolean = false;

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private threadService: ThreadsService
  ) { }

  ngOnInit() {
    this.route.data.pipe(
      map(data => data.thread))
      .subscribe(thread => { this.thread = thread;
      });

    this.form = this.builder.group({
      body: ['', [Validators.minLength(30), Validators.maxLength(3000), Validators.required]],
      poster: ['', Validators.minLength(3)]
    })
  }

  goBackToParent(){
    this.router.navigate(['../'], { relativeTo : this.route})
  }

  addReply(reply: Thread): Thread{
    this.thread.replies ? this.thread.replies.push(reply) : this.thread.replies = [reply];
    this.thread.mostRecent = reply.id;
    return this.thread

}

  save(reply: Thread){
    reply.isMainThread = false;
    this.threadService.addThread(reply).pipe(
      switchMap( reply => this.threadService.updateThread(this.addReply(reply)))).subscribe(
      () => {
        this.saved = true;
        this.router.navigate(['../'], {relativeTo: this.route})
      }
    )

  }

}
