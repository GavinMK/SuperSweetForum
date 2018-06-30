import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRoute, Router, ActivatedRouteSnapshot } from "@angular/router";
import { ThreadsService } from "./threads.service";
import { Observable, of } from "rxjs";
import { tap, map, catchError } from "rxjs/operators";

@Injectable()
export class ThreadsGuard implements CanActivate {

    constructor(private router: Router, 
                private threadsService: ThreadsService) {}

    canActivate(activatedRoute: ActivatedRouteSnapshot): Observable<boolean> {
        const paramId = activatedRoute.params.id;
        return this.threadsService.getThread(paramId).pipe(
            catchError(error => {
                if (error.status === 404) {
                    this.router.navigate(['/threads'])
                }
                return of(null)
            }),
            map(thread => !!thread)
        )
    }
}