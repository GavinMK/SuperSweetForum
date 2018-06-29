import { Component, OnInit } from '@angular/core';
import {ThreadsService} from './threads.service';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {

  constructor(private threadService: ThreadsService) { }

  ngOnInit() {
  }
}
