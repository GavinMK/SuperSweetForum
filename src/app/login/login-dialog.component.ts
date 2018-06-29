import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {UserService} from '../users/user.service';
import {User} from '../models/user';
import { EventBusService } from '../shared/services/event-bus.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {

  user: User;

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>, 
              private userService: UserService, 
              private eventBusService: EventBusService) {}

  ngOnInit() {
    this.initializeUser();
  }

  login(user: any) {
    this.userService.login(user.name, user.password).subscribe(userLogged => {
      this.dialogRef.close();
    });
  }

  private initializeUser () {
    this.user = {
      id: null,
      name: '',
      totalPosts: 0,
      bio: {
        firstName: '',
        lastName: '',
        email: ''
      }
    }
  }

}