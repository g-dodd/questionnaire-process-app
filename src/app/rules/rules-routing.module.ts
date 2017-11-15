import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditRulesComponent } from './edit-rules/edit-rules.component';
import { RulesComponent } from './rules.component';
import { QuestionListComponent } from './question-list/question-list.component';

export const rulesRoutes: Routes = [
    {
        path: 'rules',
        component: RulesComponent,
        children: [
            {
                path: '',
                component: QuestionListComponent,
                children: [
                    { path: 'edit-rules', component: EditRulesComponent }
                ]
            }
            
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(rulesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class RulesRoutingModule { }
