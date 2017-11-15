import { Pipe, PipeTransform } from '@angular/core';

import { Patient } from '../../patients/patient';

@Pipe({ name: 'hasReport' })
export class HasReportPipe implements PipeTransform {
    transform(patients: Patient[]|null, filter: boolean): Patient[] {
        let filteredPatients: Patient[] = [];

        if (filter) {
            filteredPatients = patients;
        } else {
            if (filter !== null) {
                filteredPatients = patients.filter(patient => patient.Status > 0);
            }
        }

        return filteredPatients;
    }
}