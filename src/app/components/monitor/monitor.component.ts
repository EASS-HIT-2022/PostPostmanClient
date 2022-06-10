import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MonitorsService } from 'src/app/services/monitors.service';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent implements OnInit {

  monitorId: string;
  monitorData: any;
  monitorDataReady: boolean = false;
  monitorExecutions: any;
  monitorExecutionsReady: boolean = false;


  constructor(private route: ActivatedRoute, private monitorService: MonitorsService) { 
    this.monitorId = '';
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.monitorId = params['monitorId'];
    });
    this.monitorService.getExecutionsDataByMonitorId(this.monitorId).subscribe(executionsArr => {
      this. monitorExecutions =  executionsArr.map((executionItem: any) => {
          return {
            time: executionItem.run_time,
            responses: executionItem.executions.map((execution: any) => {return execution.response}),
            stats: executionItem.stats.requests
          };
      });
      this.monitorExecutions.slice(-10);
      console.log(this.monitorExecutions);
      this.monitorExecutionsReady = true;
    });
    this.monitorService.getMonitorById(this.monitorId).subscribe(monitorData => {
      this.monitorData = monitorData;
      this.monitorDataReady = true;
    })
  }

  getPercentage(total: number, failed: number) {
    return ((total - failed) / total) * 100;
  }

}


