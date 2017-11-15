import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { PatientCardListComponent } from '../patients/patient-card-list/patient-card-list.component';
import { ProcessReportsComponent } from '../process-reports/process-reports.component';
import { RulesComponent } from '../rules/rules.component';
import { EditRulesComponent } from '../rules/edit-rules/edit-rules.component';
import { QuestionListComponent } from '../rules/question-list/question-list.component';

const dashboardRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {
                path: '',
                component: PatientCardListComponent
            },
            {
                path: 'process-reports',
                component: ProcessReportsComponent
            },
            {
                path: 'rules',
                component: RulesComponent,
                children: [
                    {
                        path: '',
                        component: QuestionListComponent,
                        children: [
                            { path: 'edit-rules/:sectionId/:questionId', component: EditRulesComponent }
                        ]
                    }
                ]
            }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardRoutingModule { }
