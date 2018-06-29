import { Component, OnInit } from "@angular/core";
import { UserService } from './user.service';
import { Subject } from 'rxjs';
import {switchMap, debounceTime} from 'rxjs/operators';
import {User} from '../models/user';

@Component({
    selector: 'ssf-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

    users: Array<User>;
    search$ = new Subject<string>();

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.userService.getAllUsers().subscribe(users => {
            this.users = users;
        });
        this.search$.pipe(
            debounceTime(500),
            switchMap(searchTerm => this.userService.getFilteredUsersByName(searchTerm))
        ).subscribe(users => {
            this.users = users;
        });
    }

}