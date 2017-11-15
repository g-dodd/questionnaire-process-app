import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { ConvertDatePipe } from './convert-date/convert-date.pipe';
import { ConvertRuleAnswerPipe } from './convert-rule-answer/convert-rule-answer.pipe';
import { FilterStatusPipe } from './filter-status/filter-status.pipe';
import { HasReportPipe } from './has-report/has-report.pipe';
import { OrderByPipe } from './order-by/order-by.pipe';
import { SearchPatientsPipe } from './search-patients/search-patients.pipe';
import { StatusToTextPipe } from './status-to-text/status-to-text.pipe';


@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        ConvertDatePipe,
        ConvertRuleAnswerPipe,
        FilterStatusPipe,
        HasReportPipe,
        OrderByPipe,
        SearchPatientsPipe,
        StatusToTextPipe
    ],
    exports: [
        ConvertDatePipe,
        ConvertRuleAnswerPipe,
        FilterStatusPipe,
        HasReportPipe,
        OrderByPipe,
        SearchPatientsPipe,
        StatusToTextPipe
    ],
    bootstrap: []
})
export class SharedPipesModule { }
