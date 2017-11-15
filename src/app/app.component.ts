import { Component, OnInit } from '@angular/core';

import { Message } from 'primeng/primeng';

import { PatientsService } from './patients/patients.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    msgs: Message[] = [];

    constructor(private patientsService: PatientsService) {}

    ngOnInit() {
        this.getPatients();
    }

    getPatients() {
        this.patientsService.getPatients().subscribe(
            response => {
                this.patientsService.updatePatientsStream(response);
            });
    }
}
