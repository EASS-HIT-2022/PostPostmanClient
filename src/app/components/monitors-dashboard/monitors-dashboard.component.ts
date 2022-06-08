import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitors-dashboard',
  templateUrl: './monitors-dashboard.component.html',
  styleUrls: ['./monitors-dashboard.component.scss']
})
export class MonitorsDashboardComponent implements OnInit {

  monitorsMockData = [
    {
      name: "test 1",
      description: "test 1 description",
      collection_url: "test 1 collection url",
    },
    {
      name: "test 2", 
      description: "test 2 description",
      collection_url: "test 2 collection url",
    },
    {
      name: "test 3",
      description: "test 3 description",
      collection_url: "test 3 collection url",
    },
    {
      name: "test 4",
      description: "test 4 description",
      collection_url: "test 4 collection url",
    },
    {
      name: "test 5",
      description: "test 5 description",
      collection_url: "test 5 collection url",
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
