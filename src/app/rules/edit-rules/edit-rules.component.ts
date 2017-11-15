import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';


import 'rxjs/add/operator/switchMap';
import * as _ from 'lodash';
import { MessageService } from 'primeng/components/common/messageservice';

import { Patient } from '../../patients/patient';
import { PatientsService } from '../../patients/patients.service';
import { QuestionsService } from '../../questions/questions.service';

@Component({
  selector: 'app-edit-rules',
  templateUrl: './edit-rules.component.html',
  styleUrls: ['./edit-rules.component.scss']
})
export class EditRulesComponent implements OnInit, OnDestroy {
    editRules: any = {};
    section: any;
    selectedPatient: Patient;
    selectedPatientReport: string = '';
    selectedQuestion: any;
    selectedQuestionRules: any = {};
    paramsSubscription: Subscription;
    patientsSubscription: Subscription;
    patientReportSubscription: Subscription;
    patients: Patient[];

    constructor(
        private messageService: MessageService,
        private route: ActivatedRoute,
        private router: Router,
        private patientsService: PatientsService,
        private questionsService: QuestionsService
    ) { }

    ngOnInit() {
        this.paramsSubscription = this.route.params.subscribe(params => {
            let sectionId = params['sectionId'];
            let questionId = params['questionId'];
            this.section = this.questionsService.getSection(sectionId);
            this.selectedQuestion = _.find(this.section.questions, question => { return question['id'] == questionId });
            this.selectedQuestionRules = this.getRulesFromQuestion(this.selectedQuestion);

            this.patientsSubscription = this.patientsService.patients$.subscribe(
                patients => {
                    this.patients = patients;
                    if (patients) {
                        this.selectedPatient = patients[0];
                        this.getPatientReport(this.selectedPatient);
                    }
                }
            );
        });
    }

    cancel() {
        this.router.navigate(['dashboard/rules']);
    }

    saveRules() {
        this.selectedQuestion.rules = this.selectedQuestionRules;
        this.questionsService.updateQuestionRules(this.section.id, this.selectedQuestion);
        this.alertSuccessful();
        //this.router.navigate(['/dashboard/rules']);
    }

    dropped(event, type) {
        setTimeout(() => {
            this.pushValueToRuleAnswer(event.target.value, type);
            event.target.value = '';
        }, 1);
    }

    getRulesFromQuestion(selectedQuestion) {
        let currentQuestionRules = {
            yes: [],
            no: [],
            referred: [],
            notAssessed: []
        }

        _.forEach(selectedQuestion.rules.yes, rule => {
            currentQuestionRules.yes.push(rule);
        });

        _.forEach(selectedQuestion.rules.no, rule => {
            currentQuestionRules.no.push(rule);
        });

        _.forEach(selectedQuestion.rules.referred, rule => {
            currentQuestionRules.referred.push(rule);
        });

        _.forEach(selectedQuestion.rules.notAssessed, rule => {
            currentQuestionRules.notAssessed.push(rule);
        });

        return currentQuestionRules;
    }

    pushValueToRuleAnswer(value, type) {
        if (type === 'yes') {
            this.selectedQuestionRules.yes.push(value);
        } else if (type === 'no') {
            this.selectedQuestionRules.no.push(value);
        } else if (type === 'referred') {
            this.selectedQuestionRules.referred.push(value);
        } else if (type === 'not-assessed') {
            this.selectedQuestionRules.notAssessed.push(value);
        }
    }

    alertSuccessful() {
        this.messageService.add({ severity: 'success', summary: 'Rules Updated Successfully', detail: 'The rules you have updated has completed successfully!' })
    }

    getPatientReport(patient: Patient) {
        this.patientReportSubscription = this.patientsService.getPatientReport(patient).subscribe(
            response => {
                this.selectedPatientReport = response['modifiedReport'];
            },
            error => {
                this.selectedPatientReport = 'No report found for this patient.';
            }
        );
    }

    onSelectedPatientChange(event) {
        this.getPatientReport(this.selectedPatient);
    }

    ngOnDestroy() {
        this.patientsSubscription.unsubscribe();
        this.patientReportSubscription.unsubscribe();
    }
}
