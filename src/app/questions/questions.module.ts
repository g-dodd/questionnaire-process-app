import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SharedPipesModule } from '../shared-pipes/shared-pipes.module';

import { QuestionsService } from './questions.service';


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        SharedPipesModule
    ],
    declarations: [

    ],
    entryComponents: [

    ],
    providers: [
        QuestionsService
    ],
    bootstrap: []
})
export class QuestionsModule { }
