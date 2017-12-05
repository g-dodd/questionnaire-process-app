import { Pipe, PipeTransform } from '@angular/core';

import * as _ from 'lodash';

@Pipe({ name: 'filterStatus', pure: false })
export class FilterStatusPipe implements PipeTransform {
    transform(values: any[], status: number): any[] {
        return _.filter(values, value => {
            if (status === 1) {
                return value.status <= status;
            } else {
                return value.status === status;
            }
            
        });
    }
}