import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as _ from 'lodash';

import { Patient } from '../patient';

@Component({
    selector: 'app-patient-process-card',
    templateUrl: './patient-process-card.component.html',
    styleUrls: ['./patient-process-card.component.scss']
})
export class PatientProcessCardComponent {
    @Input() patient: Patient;
    @Input() processing: boolean = false;
    @Input() type: string;
    @Output() onPatientToggle = new EventEmitter<Patient>();
    @Output() onPatientSelection = new EventEmitter<Patient>();
    @Output() onPatientUnselection = new EventEmitter<Patient>();
    @Output() onPatientRemoval = new EventEmitter<Patient>();

    patientSelected: boolean = false;
    rulesSectionExpanded: boolean = false;
    rulesExpanded: number[] = [];
    questionsSectionExpanded: boolean = false;

    togglePatientSelection(): void {
        this.patientSelected = !this.patientSelected;
        this.onPatientToggle.emit(this.patient);
    }

    removeFromProcessing(patient: Patient): void {
        this.onPatientRemoval.emit(patient);
    }

    toggleExpandedRulesSection() {
        this.rulesSectionExpanded = !this.rulesSectionExpanded;
    }

    toggleExpandedRulesList(sectionId) {
        if (this.isRulesListExpanded(sectionId)) {
            _.pull(this.rulesExpanded, sectionId);
        } else {
            this.rulesExpanded.push(sectionId);
        }
    }

    toggleExpandedQuestionsSection() {
        this.questionsSectionExpanded = !this.questionsSectionExpanded;
    }

    isRulesListExpanded(sectionId) {
        return _.includes(this.rulesExpanded, sectionId);
    }

    selectPatient(): void {
        this.patientSelected = true;
        this.onPatientSelection.emit(this.patient);
    }

    unselectPatient():void {
        this.patientSelected = false;
        this.onPatientUnselection.emit(this.patient);
    }

}
