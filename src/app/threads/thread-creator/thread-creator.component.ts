import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ThreadsService} from '../threads.service';
import {Thread} from '../../models/thread';
import {Router} from '@angular/router';
import {checkAvailability} from '../username-validator.directive';
import {UserService} from '../../users/user.service';
import {User} from '../../models/user';
import {switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-thread-creator',
  templateUrl: './thread-creator.component.html',
  styleUrls: ['./thread-creator.component.css']
})
export class ThreadCreatorComponent implements OnInit {

  form: FormGroup;
  user: FormControl;
  saved: boolean = false;

  constructor(
    private builder: FormBuilder,
    private threadService: ThreadsService,
    private userService: UserService,
    private router: Router) {
  }

  ngOnInit() {
    this.form = this.builder.group({
      title: ['', Validators.required],
      body: ['', [Validators.required, Validators.minLength(100), Validators.maxLength(5000)]],
      poster: ['', Validators.minLength(2)]
    })
  }

  newUser(thread: Thread): User{
    return { id: undefined, name: thread.poster, totalPosts: 1}
  }

  updateUser(user: User, id: number): User{
      user.totalPosts++;
      user.recentPost = id;
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

  assignRecent(thread: Thread): Thread{
    thread.mostRecent = thread.id;
    return thread;
  }


  save(thread: Thread){
    thread.isMainThread = true;
    this.threadService.addThread(thread).pipe(
      switchMap(thread => this.threadService.updateThread(this.assignRecent(thread)))).subscribe(reply =>{
        this.saved = true;
        this.changeUser(reply);
      this.router.navigate(["/threads"])
    });
  }


}
