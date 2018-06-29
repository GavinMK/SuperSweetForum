import {Component, OnInit } from '@angular/core';
import { User } from './models/user';
import {UserService} from './users/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: User;
  constructor(private userService: UserService) {}
  ngOnInit() {
  }
}
