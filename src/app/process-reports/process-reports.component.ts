import { Component, OnInit, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { MessageService } from 'primeng/components/common/messageservice';
import * as _ from 'lodash';

import { DetailedReportComponent } from './detailed-report/detailed-report.component';
import { Patient } from '../patients/patient';
import { PatientProcessCardComponent } from '../patients/patient-process-card/patient-process-card.component';
import { PatientsService } from '../patients/patients.service';

@Component({
    selector: 'app-process-reports',
    templateUrl: './process-reports.component.html',
    styleUrls: ['./process-reports.component.scss']
})
export class ProcessReportsComponent implements OnInit, AfterViewInit {
    @ViewChildren(PatientProcessCardComponent) patientCards: QueryList<PatientProcessCardComponent>;
    bsModalRef: BsModalRef;
    patients: Patient[] = [];
    patientsSelected: Patient[] = [];
    patientsToProcess: Patient[] = [];
    query: string = '';
    processingComplete: boolean = false;
    noReportFilterModel: boolean = false;
    loadingPatients: boolean;

    constructor(
        private patientsService: PatientsService,
        private messageService: MessageService,
        private modalService: BsModalService
    ) { }

    ngOnInit(): void {
        this.loadingPatients = true;
        this.getUnprocessedPatients();
        this.getReadyToProcessPatients();
    }

    ngAfterViewInit() {
        
    }

    getUnprocessedPatients(): void {
        if (!this.patientsService.unprocessedPatients) {
            this.patientsService.getPatients().subscribe(
                response => {
                    this.patientsService.unprocessedPatients = response;
                    this.patients = this.patientsService.unprocessedPatients;
                },
                error => {

                },
                () => {
                    this.loadingPatients = false;
                }
            );
        } else {
            this.patients = this.patientsService.unprocessedPatients;
            this.loadingPatients = false;
        }
    }

    getReadyToProcessPatients() {
        if (!this.patientsService.readyToProcessPatients) {
            this.patientsToProcess = [];
        } else {
            this.patientsToProcess = this.patientsService.readyToProcessPatients;
        }
    }

    togglePatientSelection(patient: Patient): void {
        if (this.isInSelection(patient.ID)) {
            this.removeFromSelection(patient);
        } else {
            this.patientsSelected.push(patient);
        }
    }

    removePatientFromSelection(patient: Patient): void {
        if (this.isInSelection(patient.ID)) {
            this.removeFromSelection(patient);
        }
    }

    addPatientToSelection(patient: Patient): void {
        if (!this.isInSelection(patient.ID)) {
            this.patientsSelected.push(patient);
        }
    }

    addToProcessing(): void {
        _.forEach(this.patientsSelected, patientSelected => {
            this.moveToProcessing(patientSelected);
        });

        this.updateServiceData();
    }

    moveToProcessing(patient: Patient): void {
        let currentPatient = patient;

        this.patientsToProcess.push(currentPatient);

        this.removeFromSelection(currentPatient);
        this.removeFromList(patient);
    }

    isInSelection(id: number) {
        return _.some(this.patientsSelected, patient => {
            return patient.ID === id;
        });
    }

    isInProcessing(id: number) {
        return _.some(this.patientsToProcess, patient => {
            return patient.ID === id;
        });
    }

    removeFromSelection(patient: Patient) {
        this.patientsSelected = _.filter(this.patientsSelected, patientSelected => {
            return patientSelected.ID !== patient.ID;
        });
    }

    removeFromList(patient: Patient) {
        this.patients = _.filter(this.patients, currentPatient => {
            return patient.ID !== currentPatient.ID;
        });
    }

    removeFromProcessing(patient: Patient) {
        let index = this.getProcessingIndex(patient);
        this.patientsToProcess.splice(index, 1);
        this.addToPatientList(patient);
        this.updateServiceData();
    }

    getSelectionIndex(patient: Patient): number {
        return this.patientsSelected.findIndex(patientSelected => {
            return patient.ID === patientSelected.ID;
        });
    }

    getListIndex(patient: Patient): number {
        return this.patients.findIndex(patientListed => {
            return patient.ID === patientListed.ID;
        });
    }

    getProcessingIndex(patient: Patient): number {
        return this.patientsToProcess.findIndex(patientToProcess => {
            return patient.ID === patientToProcess.ID;
        });
    }

    addToPatientList(patient: Patient) {
        this.patients.push(patient);
    }

    processReports() {
        this.processingComplete = true;
        this.patientsToProcess = this.updatePatientsStatus(this.patientsToProcess, 2);
        _.forEach(this.patientsToProcess, patientToProcess => {
            this.addToPatientList(patientToProcess);
        });
        this.patientsToProcess = [];
        this.updateServiceData();
        this.alertSuccessful();
    }

    updatePatientsStatus(patients: Patient[], status: number): Patient[] {
        return _.forEach(patients, patient => {
            patient.Status = status;
        });
    }

    openDetailedReport() {
        this.bsModalRef = this.modalService.show(DetailedReportComponent, { class: 'modal-lg' });
    }

    alertSuccessful() {
        this.messageService.add({severity: 'success', summary: 'Reports Processed Successfully', detail: 'The patient reports you have processed have completed successfully!'})
    }

    updateServiceData() {
        this.patientsService.readyToProcessPatients = this.patientsToProcess;
        this.patientsService.unprocessedPatients = this.patients;
    }

    logPatientCards() {
        this.patientCards.forEach(patientCard => console.log('Patient Card', patientCard));
    }

    selectAll(type: string) {
        this.patientCards.forEach(patientCard => {
            if (patientCard.type === type) {
                patientCard.selectPatient();
            }
        });
    }

    unselectAll(type: string) {
        this.patientCards.forEach(patientCard => {
            if (patientCard.type === type) {
                patientCard.unselectPatient();
            }
        });
    }
}
