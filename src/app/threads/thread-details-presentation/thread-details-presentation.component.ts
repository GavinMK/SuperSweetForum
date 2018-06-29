import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Thread} from '../../models/thread';

@Component({
  selector: 'app-thread-details-presentation',
  templateUrl: './thread-details-presentation.component.html',
  styleUrls: ['./thread-details-presentation.component.css']
})
export class ThreadDetailsPresentationComponent implements OnInit {

  @Input() thread: Thread;

  @Output() reply: EventEmitter<number | string> = new EventEmitter<number | string>();

  @Output() back: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
