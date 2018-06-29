import {Injectable} from '@angular/core';
import { FilterTimeOption } from '../../models/filter-time-option';
import { Observable, of } from 'rxjs';

@Injectable()
export class FilterTimeOptionService {

    getAllFilterTimeOptions(): Observable<Array<FilterTimeOption>> {
        return of([
            {
                value: (60 * 60 * 1000) / 2, // 30 MIN
                viewValue: '30 min'
        },
        {
                value: 60 * 60 * 1000, // 1 HOUR
                viewValue: '1 hour'
        },
        {
                value: 60 * 60 * 1000 * 2, // 2 HOUR
                viewValue: '2 hour'
        }])
    }
}