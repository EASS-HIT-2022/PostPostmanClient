import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submit() {
  }
}
