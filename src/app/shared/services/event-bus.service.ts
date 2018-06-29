import {Injectable} from '@angular/core';
import {Subject, Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {EventBusArgs} from '../../models/event-bus-args';

@Injectable()
export class EventBusService {

    _message$ = new Subject<EventBusArgs>();

    constructor() { }
  
    emit(typeEvent: string, payload: any): void {
      this._message$.next({type: typeEvent, data: payload})
    }
  
    observe(typeEvent: string): Observable<any> {
      return this._message$.pipe(
        filter(message => message.type === typeEvent),
        map(eventBusArg => eventBusArg.data)
      );
    }
}