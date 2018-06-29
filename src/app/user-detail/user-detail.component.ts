import { Component, OnInit } from '@angular/core';
import {UserService} from '../users/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import {switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap(params => this.userService.getUser(params["id"]))
    ).subscribe(user => {
      console.log(user)
      this.user = user;
    })
  }

}
