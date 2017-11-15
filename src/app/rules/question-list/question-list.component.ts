import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import * as _ from 'lodash';

import { AddRuleComponent } from '../add-rule/add-rule.component';
import { EditRulesComponent } from '../edit-rules/edit-rules.component';
import { QuestionsService } from '../../questions/questions.service';
import { RulesService } from '../rules.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

    bsModalRef: BsModalRef;
    newRuleSubscription: Subscription;
    editRuleSubscription: Subscription;
    sectionSubscription: Subscription;
    sections: any[] = [];
    selectedSection: any = {
        id: null
    };
    selectedQuestion: any = {
        id: null,
        rules: {
            yes: [],
            no: [],
            referred: [],
            notAssessed: []
        }
    };
    loadingSections: boolean;
    constructor(
        private modalService: BsModalService,
        private questionsService: QuestionsService,
        private router: Router,
        private route: ActivatedRoute,
        private rulesService: RulesService
    ) {
        this.newRuleSubscription = this.rulesService.getNewRule().subscribe(
            newRule => {
                this.addNewRule(newRule);
            }
        );
    }

    ngOnInit() {
        this.sections = this.questionsService.getQuestions();
        this.loadingSections = false;
        //this.sectionSubscription = this.questionsService.getSections().subscribe(
        //    response => {
        //        this.sections = response;
        //    },
        //    error => {

        //    },
        //    () => {
        //        this.loadingSections = false;
        //    }
        //);
    }

    selectQuestion2(question: any) {
        this.selectedQuestion = question;
    }

    selectSection(section: any) {
        this.selectedSection = section;
    }

    openEditRules(question): void {
        let editRules: any = this.processRulesForEditing(question);
        this.bsModalRef = this.modalService.show(EditRulesComponent, { class: 'modal-lg' });
        this.bsModalRef.content.editRules = editRules;
        this.editRuleSubscription = this.modalService.onHide.subscribe((reason: string) => {
            if (reason === 'save') {
                this.editRules(this.bsModalRef.content.editRules);
            }
            this.editRuleSubscription.unsubscribe();
        });
    }

    isQuestionSelected(question) {
        return this.selectedQuestion === question;
    }

    addNewRule(newRule: any) {
        _.forEach(this.sections, section => {
            if (section.id === newRule.sectionName.id) {
                _.forEach(section.questions, question => {
                    if (question['type'] === newRule.questionName) {
                        question['rules'].push({
                            name: newRule.ruleName,
                            answer: newRule.answerName
                        });
                    }
                });
            }
        });
    }

    editRules(editRules) {
        _.forEach(this.sections, section => {
            _.forEach(section.questions, question => {
                if (this.selectedQuestion === question) {
                    _.forEach(question['rules'], rule => {
                        if (rule['answer'] === 'Yes') {
                            rule['ruleList'] = editRules.yes;
                        } else if (rule['answer'] === 'No') {
                            rule['ruleList'] = editRules.no;
                        } else if (rule['answer'] === 'Referred') {
                            rule['ruleList'] = editRules.referred;
                        } else if (rule['answer'] === 'Not Assessed') {
                            rule['ruleList'] = editRules.notAssessed;
                        }
                    });
                    this.selectedQuestion = null;
                }
            });
        });
    }

    processRulesForEditing(question) {
        let editRules: any;
        editRules = {
            yes: [],
            no: [],
            referred: [],
            notAssessed: []
        };

        _.forEach(question['rules'], (rule: Object) => {
            if (rule['answer'] === 'Yes') {
                _.forEach(rule['ruleList'], ruleValue => {
                    editRules.yes.push(ruleValue);
                });
            } else if (rule['answer'] === 'No') {
                _.forEach(rule['ruleList'], ruleValue => {
                    editRules.no.push(ruleValue);
                });
            } else if (rule['answer'] === 'Referred') {
                _.forEach(rule['ruleList'], ruleValue => {
                    editRules.referred.push(ruleValue);
                });
            } else if (rule['answer'] === 'Not Assessed') {
                _.forEach(rule['ruleList'], ruleValue => {
                    editRules.notAssessed.push(ruleValue);
                });
            }
        });
        return editRules;
    }

    goToEditRules(sectionId, questionId) {
        this.router.navigate(['./edit-rules', sectionId, questionId], { relativeTo: this.route });
    }

    updateSectionRuleCount(section: any) {
        let totalNumberOfRules: number = 0;
        _.forEach(section.questions, question => {
            totalNumberOfRules += question['rules'].yes.length + question['rules'].no.length + question['rules'].referred.length + question['rules'].notAssessed.length;
        });
        return totalNumberOfRules;
    }

    updateQuestionRuleCount(question: any) {
        return question['rules'].yes.length + question['rules'].no.length + question['rules'].referred.length + question['rules'].notAssessed.length;
    }
}
