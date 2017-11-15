import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RulesService {
    private subject = new Subject<any>();

    broadcastNewRule(rule: any) {
        this.subject.next(rule);
    }

    getNewRule(): Observable<any> {
        return this.subject.asObservable();
    }
}