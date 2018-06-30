import { Component, OnInit } from '@angular/core';
import {UserService} from '../../users/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import {map} from 'rxjs/operators';

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
    this.route.data.pipe(
      map(data => data.user)
    ).subscribe(user => {
      this.user = user as User;
    })
  }

}
