import { Component, OnInit } from '@angular/core';
import {Thread} from '../../models/thread';

@Component({
  selector: 'app-topic-page',
  templateUrl: './topic-page.component.html',
  styleUrls: ['./topic-page.component.css']
})
export class TopicPageComponent implements OnInit {

  private threads: Thread[];

  constructor() { }

  ngOnInit() {
  }

}
