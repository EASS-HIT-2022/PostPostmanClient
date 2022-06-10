import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMonitorComponent } from './components/add-monitor/add-monitor.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MonitorComponent } from './components/monitor/monitor.component';
import { MonitorsDashboardComponent } from './components/monitors-dashboard/monitors-dashboard.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'add', component: AddMonitorComponent },
  { path: 'dashboard', component: MonitorsDashboardComponent },
  { path: 'dashboard/:monitorId', component: MonitorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
