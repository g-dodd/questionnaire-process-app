import { Pipe, PipeTransform } from '@angular/core';

import * as _ from 'lodash';

@Pipe({ name: 'convertRuleAnswer', pure: false })
export class ConvertRuleAnswerPipe implements PipeTransform {
    transform(value: any): any {
        let newValue = value;
        switch (value) {
            case 'yes':
                newValue = 'Yes';
                break;
            case 'no':
                newValue = 'No';
                break;
            case 'referred':
                newValue = 'Referred';
                break;
            case 'not-assessed':
                newValue = 'Not Assessed';
                break;
        };

        return newValue;
    }
}