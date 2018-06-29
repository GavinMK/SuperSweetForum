import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ThreadsService} from '../threads.service';
import {Thread} from '../../models/thread';
import {Router} from '@angular/router';
import {checkAvailability} from '../username-validator.directive';
import {UserService} from '../../users/user.service';

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

  save(thread: Thread){
    this.threadService.addThread(thread).subscribe(() => {
      this.saved = true;
      this.router.navigate(["/threads"])
    })
  }


}
