import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MonitorsService } from 'src/app/services/monitors.service';
import { SuccessSnackbarComponent } from '../success-snackbar/success-snackbar.component';

@Component({
  selector: 'app-add-monitor-form',
  templateUrl: './add-monitor-form.component.html',
  styleUrls: ['./add-monitor-form.component.scss']
})
export class AddMonitorFormComponent implements OnInit {

  newMonitorForm = this.fb.group({
    name: [null, Validators.required],
    description: [null, Validators.required],
    collection_url: [null, Validators.required],
  });

  constructor(private fb: FormBuilder,
              private monitorService: MonitorsService,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  submit() {
    debugger;
    if(this.newMonitorForm.valid) {
      this.monitorService.createMonitor(this.newMonitorForm.value).subscribe(response => {
        console.log(response);
        if(response.acknowledged) {
          this._snackBar.openFromComponent(SuccessSnackbarComponent, {
            duration: 3000,
          });
        }
      })
    }
    else {
      alert('invalid form values');
    }
  }
}
