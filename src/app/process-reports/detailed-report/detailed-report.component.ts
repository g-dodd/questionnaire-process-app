import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
    selector: 'app-detailed-report',
    templateUrl: './detailed-report.component.html',
    styleUrls: ['./detailed-report.component.scss']
})
export class DetailedReportComponent {
    constructor(private bsModelRef: BsModalRef) { }

    close(): void {
        this.bsModelRef.hide();
    }
}
