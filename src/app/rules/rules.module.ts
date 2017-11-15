import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccordionModule, ModalModule } from 'ngx-bootstrap';
import { ChipsModule } from 'primeng/primeng';

import { SharedPipesModule } from '../shared-pipes/shared-pipes.module';

import { AddRuleComponent } from './add-rule/add-rule.component';
import { EditRulesComponent } from './edit-rules/edit-rules.component';
import { PatientsModule } from '../patients/patients.module';
import { RulesComponent } from './rules.component';
import { RulesRoutingModule } from './rules-routing.module';
import { RulesService } from './rules.service';
import { QuestionListComponent } from './question-list/question-list.component';


@NgModule({
    imports: [
        AccordionModule.forRoot(),
        BrowserModule,
        ChipsModule,
        CommonModule,
        FormsModule,
        ModalModule,
        PatientsModule,
        RulesRoutingModule,
        SharedPipesModule
    ],
    declarations: [
        AddRuleComponent,
        EditRulesComponent,
        RulesComponent,
        QuestionListComponent
    ],
    providers: [
        RulesService
    ],
    bootstrap: []
})
export class RulesModule { }
