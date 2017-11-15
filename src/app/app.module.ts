import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { GrowlModule } from 'primeng/primeng';
import { MessageService } from 'primeng/components/common/messageservice';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PatientsModule } from './patients/patients.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
    declarations: [
        AppComponent
  ],
    imports: [
        BrowserModule,
        DashboardModule,
        GrowlModule,
        HttpModule,
        PatientsModule,
        AppRoutingModule,
        AuthModule
  ],
    providers: [
        MessageService,
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
