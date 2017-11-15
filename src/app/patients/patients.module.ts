import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ButtonsModule, ModalModule } from 'ngx-bootstrap';

import { PatientsComponent } from './patients.component';
import { PatientCardComponent } from './patient-card/patient-card.component';
import { PatientCardListComponent } from './patient-card-list/patient-card-list.component';
import { PatientProcessCardComponent } from './patient-process-card/patient-process-card.component';
import { PatientsService } from './patients.service';
import { ReportLogComponent } from './report-log/report-log.component';
import { SharedPipesModule } from '../shared-pipes/shared-pipes.module';
import { PatientTableListComponent } from './patient-table-list/patient-table-list.component';


@NgModule({
    imports: [
        BrowserModule,
        ButtonsModule.forRoot(),
        CommonModule,
        FormsModule,
        ModalModule.forRoot(),
        RouterModule,
        SharedPipesModule
    ],
    declarations: [
        PatientCardComponent,
        PatientCardListComponent,
        PatientsComponent,
        PatientProcessCardComponent,
        ReportLogComponent,
        PatientTableListComponent
    ],
    exports: [
        PatientCardListComponent,
        PatientProcessCardComponent
    ],
    entryComponents: [
        ReportLogComponent
    ],
    providers: [
        PatientsService
    ],
    bootstrap: [PatientsComponent]
})
export class PatientsModule { }
