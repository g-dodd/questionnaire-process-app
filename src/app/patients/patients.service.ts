import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';
import { Patient } from './patient';

@Injectable()
export class PatientsService {
    private patientsUrl = environment.apiUrl + 'patients';
    private reportsUrl = environment.apiUrl + 'reports';
    patients$: BehaviorSubject<Patient[]|null> = new BehaviorSubject(null);
    patients: Patient[];
    unprocessedPatients: Patient[];
    readyToProcessPatients: Patient[] = [];

    constructor(private http: Http) {}

    getPatients(): Observable<Patient[]> {
        //return PATIENTS;
        return this.http.get(this.patientsUrl)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    updatePatientsStream(patients: Patient[]) {
        this.patients$.next(patients);
    }

    getPatientReport(patient: Patient): Observable<any> {
        let params: URLSearchParams = new URLSearchParams();

        params.set('firstName', patient.patientFirstName);
        params.set('lastName', patient.patientLastName);

        return this.http.get(this.reportsUrl, { search: params })
            .map((res: Response) => res.json())
            .catch((error: any) => {
                return Observable.throw(new Error(error.status));
            });
    }
}