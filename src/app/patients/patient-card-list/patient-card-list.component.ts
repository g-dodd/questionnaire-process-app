import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { MessageService } from 'primeng/components/common/messageservice';
import * as _ from 'lodash';

import { DetailedReportComponent } from '../../process-reports/detailed-report/detailed-report.component';
import { Patient } from '../patient';
import { PatientsService } from '../patients.service';

@Component({
    selector: 'app-patient-card-list',
    templateUrl: './patient-card-list.component.html',
    styleUrls: ['./patient-card-list.component.scss']
})
export class PatientCardListComponent implements OnInit, OnDestroy {
    patients: Patient[];
    patientsSubscription: Subscription;
    query: string;
    noReportFilterModel: boolean = false;
    patientsLodash: string[] = [];
    bsModalRef: BsModalRef;
    loadingPatients: boolean;

    constructor(
        private messageService: MessageService,
        private modalService: BsModalService,
        private patientService: PatientsService
    ) { }

    ngOnInit(): void {
        this.loadingPatients = true;
        this.getPatients();
    }

    getPatients(): void {
        this.patientsSubscription = this.patientService.patients$.subscribe(
            response => {
                this.patients = response;
                if (this.patients && this.patients !== null) {
                    this.loadingPatients = false;
                }
            },
            error => {

            }
        );

        
    }

    processAllReports() {
        this.alertSuccessful();
        this.bsModalRef = this.modalService.show(DetailedReportComponent, { 'class': 'modal-lg' })
    }

    alertSuccessful() {
        this.messageService.add({ severity: 'success', summary: 'Reports Processed Successfully', detail: 'The patient reports you have processed have completed successfully!' })
    }

    ngOnDestroy() {
        this.patientsSubscription.unsubscribe();
    }
}
