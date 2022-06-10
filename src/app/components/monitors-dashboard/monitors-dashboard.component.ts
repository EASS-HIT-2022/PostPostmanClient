import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MonitorsService } from 'src/app/services/monitors.service';
import { SuccessRunSnackbarComponent } from '../success-run-snackbar/success-run-snackbar.component';

@Component({
  selector: 'app-monitors-dashboard',
  templateUrl: './monitors-dashboard.component.html',
  styleUrls: ['./monitors-dashboard.component.scss']
})
export class MonitorsDashboardComponent implements OnInit {

  monitors: any[] = [];
  monitorsLoaded: boolean = false;

  constructor(private monitorsService: MonitorsService,
              private _snackBar: MatSnackBar) { 
  }

  ngOnInit(): void {
    this.monitorsService.getAllMonitors().subscribe(monitors => {
      setTimeout( () => {
        this.monitors = monitors;
        this.monitorsLoaded = true;
      }, 2000)
    })
  }

  executeMonitor(monitorId: string) {
    this.monitorsService.executeMonitor(monitorId).subscribe(response => {
      if(response.acknowledged) {
        this._snackBar.openFromComponent(SuccessRunSnackbarComponent, {
          duration: 3000,
        });
      }
    });
  }

}
