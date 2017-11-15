import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccordionModule, ModalModule } from 'ngx-bootstrap';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DetailedReportComponent } from '../process-reports/detailed-report/detailed-report.component';
import { PatientsModule } from '../patients/patients.module';
import { ProcessReportsComponent } from '../process-reports/process-reports.component';
import { QuestionsModule } from '../questions/questions.module';
import { RulesModule } from '../rules/rules.module';
import { SharedPipesModule } from '../shared-pipes/shared-pipes.module';

@NgModule({
    imports: [
        AccordionModule.forRoot(),
        CommonModule,
        BrowserModule,
        FormsModule,
        ModalModule,
        PatientsModule,
        QuestionsModule,
        SharedPipesModule,
        RulesModule,
        DashboardRoutingModule
    ],
    declarations: [
        DashboardComponent,
        DashboardComponent,
        DetailedReportComponent,
        ProcessReportsComponent
    ],
    entryComponents: [
        DetailedReportComponent
    ],
    bootstrap: [DashboardComponent],
    providers: []
})
export class DashboardModule { }
