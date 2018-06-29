import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {MatDialog} from '@angular/material';
import {LoginDialogComponent} from '../login/login-dialog.component';
import { ActivatedRoute } from '@angular/router';

import {UserService} from '../users/user.service';

@Component({
  selector: 'app-app-toolbar-container',
  templateUrl: './app-toolbar-container.component.html',
  styleUrls: ['./app-toolbar-container.component.css']
})
export class AppToolbarContainerComponent implements OnInit {

  loggedUser: User;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private dialog: MatDialog) {}

  ngOnInit() {
  }

  showLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent);
  }

}
