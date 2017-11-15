import { Pipe, PipeTransform } from '@angular/core';

import * as _ from 'lodash';

@Pipe({ name: 'orderBy', pure: false })
export class OrderByPipe implements PipeTransform {
    transform(value: any[], parameter: string): any[] {

        return _.orderBy(value, [parameter], ['asc']);
    }
}