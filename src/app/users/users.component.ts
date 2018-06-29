import { Component, OnInit } from "@angular/core";
import {UserService} from './user.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'ssf-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

    users: Object;

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.userService.getAllUsers().subscribe(users => {
            this.users = users;
        });
    }

}