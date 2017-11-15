import { Pipe, PipeTransform } from '@angular/core';

import { Patient } from '../../patients/patient';

@Pipe({ name: 'searchPatients', pure: false })
export class SearchPatientsPipe implements PipeTransform {
    transform(value: any[], keys: string, term: string): any[] {

        if (term === '') return value;
        return (value || []).filter((item) => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));
    }
}