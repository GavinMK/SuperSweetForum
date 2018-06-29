import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ThreadsService} from '../threads.service';
import {Reply, Thread} from '../../models/thread';

@Component({
  selector: 'app-reply-creator',
  templateUrl: './reply-creator.component.html',
  styleUrls: ['./reply-creator.component.css']
})
export class ReplyCreatorComponent implements OnInit {

  thread: Thread;
  form: FormGroup;

  constructor(
    private builder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.builder.group({
      body: ['', [Validators.minLength(30), Validators.maxLength(3000)]],
      poster: ['', Validators.minLength(3)]
    })
  }

}
