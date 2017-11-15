import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';
import { QUESTIONS } from './mock-questions';
import { Section } from './section';

import * as _ from 'lodash';

@Injectable()
export class QuestionsService {

    questionsStore: any[];
    private sectionsUrl = environment.apiUrl + 'sections';

    constructor(private http: Http) {
        //this.getQuestions();
    };

    getSection(id: any): any {
        let section = _.find(this.questionsStore, section => {
            return section.id == id;
        });

        return section;
    }

    getSections(): Observable<Section[]> {
        return this.http.get(this.sectionsUrl)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getQuestions() {
        if (!this.questionsStore) {
            this.questionsStore = QUESTIONS;
        }

        return this.questionsStore;
    }

    updateQuestionRules(sectionId, question) {
        let sectionToUpdate = _.find(this.questionsStore, section => {
            return section.id === sectionId;
        });

        let questionToUpdate = _.find(sectionToUpdate.questions, sectionToUpdateQuestion => {
            return sectionToUpdateQuestion['id'] == question['id'];
        });

        questionToUpdate['rules'] = question.rules;

        this.getQuestions();
    }

}