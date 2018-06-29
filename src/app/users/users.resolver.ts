import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, ActivatedRoute} from '@angular/router';
import {User} from '../models/user';
import { UserService } from './user.service';

@Injectable()
export class UsersResolver implements Resolve<User>  {

    constructor(private userService: UserService) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this.userService.getUser(route.paramMap.get("id"));
    }
}