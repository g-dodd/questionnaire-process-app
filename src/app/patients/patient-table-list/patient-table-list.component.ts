import { Component, Input, OnInit } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap';

import { Patient } from '../patient';
import { ReportLogComponent } from '../report-log/report-log.component';

@Component({
  selector: 'app-patient-table-list',
  templateUrl: './patient-table-list.component.html',
  styleUrls: ['./patient-table-list.component.scss']
})
export class PatientTableListComponent implements OnInit {
    @Input() patients = [];
    @Input() loadingPatients;
    bsModalRef: BsModalRef;

    constructor(private modalService: BsModalService) { }

    ngOnInit() {
    }

    openReportLog(patient: Patient): void {
        this.bsModalRef = this.modalService.show(ReportLogComponent, { class: 'modal-lg' });
        this.bsModalRef.content.patientName = patient.PatientFirstName + ' ' + patient.PatientLastName;
    }

}
