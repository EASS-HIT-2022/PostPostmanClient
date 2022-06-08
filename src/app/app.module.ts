import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MaterialModule } from 'src/material/material.module';
import { AddMonitorComponent } from './components/add-monitor/add-monitor.component';
import { AddMonitorFormComponent } from './components/add-monitor-form/add-monitor-form.component';
import { MonitorsDashboardComponent } from './components/monitors-dashboard/monitors-dashboard.component';
import { MonitorComponent } from './components/monitor/monitor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AddMonitorComponent,
    AddMonitorFormComponent,
    MonitorsDashboardComponent,
    MonitorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
