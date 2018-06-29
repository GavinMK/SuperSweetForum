import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {MatDialog} from '@angular/material';
import {LoginDialogComponent} from '../login/login-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { map, tap} from 'rxjs/operators';

import {UserService} from '../users/user.service';
import { EventBusService } from '../shared/services/event-bus.service';

@Component({
  selector: 'app-app-toolbar-container',
  templateUrl: './app-toolbar-container.component.html',
  styleUrls: ['./app-toolbar-container.component.css']
})
export class AppToolbarContainerComponent implements OnInit {

  loggedUser: User;
  
  constructor(private userService: UserService, 
              private route: ActivatedRoute, 
              private dialog: MatDialog, 
              private eventBusService: EventBusService) {}
  
  ngOnInit() {
    this.route.data.pipe(
      map(data => data['user']),
    ).subscribe(user => {
      this.loggedUser = user as User;
    })

    this.eventBusService.observe('LOGIN_SUCCESS').subscribe(userLogged => {
      this.loggedUser = userLogged;
    });

    this.eventBusService.observe('LOGOUT_SUCCESS').subscribe(() => {
      this.loggedUser = null;
    })
  }

  showLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent);
  }

  logout(): void {
    this.userService.logout();
  }

}
