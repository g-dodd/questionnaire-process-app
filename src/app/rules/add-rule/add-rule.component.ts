import { Component, Input } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap';

import { RulesService } from '../rules.service';

@Component({
    selector: 'app-add-rule',
    templateUrl: './add-rule.component.html',
    styleUrls: ['./add-rule.component.scss']
})
export class AddRuleComponent {
    @Input() sections: any[];

    constructor(
        public bsModalRef: BsModalRef,
        private rulesService: RulesService
    ) { }

    selectedSection: any = {};
    selectedQuestion = '';
    selectedRule = '';
    selectedAnswer = '';

    answers: any[] = ['yes', 'no', 'referred', 'not-assessed'];

    onSectionChange(newValue: any) {
        this.selectedSection = newValue;
    }

    onSubmit(form: any) {
        this.rulesService.broadcastNewRule(form.value);
        this.hideModal();
    }

    onCancel() {
        this.hideModal();
    }

    hideModal() {
        this.bsModalRef.hide();
    }
}