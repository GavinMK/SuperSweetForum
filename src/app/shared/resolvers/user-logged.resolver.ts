import { Injectable } from "@angular/core";
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {User} from '../../models/user';
import {UserService} from '../../users/user.service';

@Injectable()
export class UserLoggedResolver implements Resolve<User> {

    constructor(private userService: UserService) {}

    resolve(snapshot: ActivatedRouteSnapshot) {
        return this.userService.getUserLoggedIn();
    }
}