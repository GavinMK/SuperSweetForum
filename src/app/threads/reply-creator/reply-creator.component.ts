import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Reply, Thread} from '../../models/thread';
import {ThreadsService} from '../threads.service';
import {map, switchMap, tap} from 'rxjs/operators';
import {waitForMap} from '@angular/router/src/utils/collection';
import {User} from '../../models/user';
import {UserService} from '../../users/user.service';

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
    private threadService: ThreadsService,
    private userService: UserService
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
    this.changeUser(reply);
    return this.thread

}

  newUser(thread: Thread): User{
    return { id: undefined, name: thread.poster, totalPosts: 1, recentPost: thread.id}
  }

  updateUser(user: User, id: number): User{
    user.totalPosts++;
    user.recentPost = id;
    console.log(user);
    return user;
  }

  changeUser(thread: Thread): void{
    if(thread.poster != '') {
      this.userService.getUserByName(thread.poster).pipe(
        switchMap(user =>  !user.length ?
          this.userService.addUser(this.newUser(thread)) : this.userService.updateUser(this.updateUser(user[0], thread.id)))
      ).subscribe()
    }
  }

  save(reply: Thread){
    reply.isMainThread = false;
    reply.parentThreadId = this.thread.id;
    reply.title = "Reply to: [" + this.thread.title + "]";
    this.threadService.addThread(reply).pipe(
      switchMap( replies => this.threadService.updateThread(this.addReply(replies)))).subscribe(
      () => {
        this.saved = true;
        this.router.navigate(['../'], {relativeTo: this.route})
      }
    )

  }

}
