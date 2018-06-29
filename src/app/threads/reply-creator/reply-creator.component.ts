import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Reply, Thread} from '../../models/thread';
import {ThreadsService} from '../threads.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-reply-creator',
  templateUrl: './reply-creator.component.html',
  styleUrls: ['./reply-creator.component.css']
})
export class ReplyCreatorComponent implements OnInit {

  thread: Thread;
  form: FormGroup;

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

  save(reply: Reply){
    reply.id = `${this.thread.id}:${this.thread.replies.length}`;
    this.thread.replies.push(reply);
    this.threadService.updateThread(this.thread)
      .subscribe(() => this.router.navigate(['../'], {relativeTo: this.route}));


  }

}
