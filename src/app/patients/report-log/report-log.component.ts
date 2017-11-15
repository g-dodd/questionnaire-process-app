import { Component, Input } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap';

@Component({
    selector: 'app-report-log',
    templateUrl: './report-log.component.html',
    styleUrls: ['./report-log.component.scss']
})
export class ReportLogComponent {
    @Input() patientName: string;

    constructor(private bsModelRef: BsModalRef) { }

    close(): void {
        this.bsModelRef.hide();
    }
}