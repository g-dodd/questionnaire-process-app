import { Component, Input, OnInit } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap';

import { ReportLogComponent } from '../report-log/report-log.component';
import { Patient } from '../patient';

@Component({
    selector: 'app-patient-card',
    templateUrl: './patient-card.component.html',
    styleUrls: ['./patient-card.component.scss']
})
export class PatientCardComponent implements OnInit {
    @Input() patient: Patient;
    bsModalRef: BsModalRef;

    constructor(private modalService: BsModalService) { }

    ngOnInit() {

    }

    getStatusName(status: string): string {
        let statusName: string;
        switch (status) {
            case 'loaded':
                statusName = 'Loaded';
                break;
            case 'pending':
                statusName = 'Pending';
                break;
            case 'no-report':
                statusName = 'No Report';
                break;
            default:
                statusName = '';
        }
        return statusName;
    }

    openReportLog(): void {
        this.bsModalRef = this.modalService.show(ReportLogComponent, { class: 'modal-lg' });
        this.bsModalRef.content.patientName = this.patient.PatientFirstName + ' ' + this.patient.PatientLastName;
    }
}
