import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonitorsService {

  apiUrl = 'http://ec2-18-212-226-39.compute-1.amazonaws.com:8080/';

  constructor(public http: HttpClient) { }

  // GET requests
  getAllMonitors(): Observable<any>{
    const url = this.apiUrl + 'monitor';
    return this.http.get<any>(url);
  }

  getMonitorById(monitorId: string): Observable<any>{
    const url = this.apiUrl + 'monitor/' + monitorId;
    return this.http.get<any>(url);
  }

  getExecutionsDataByMonitorId(monitorId: string): Observable<any> {
    const url = this.apiUrl + 'executor/' + monitorId;
    return this.http.get<any>(url);
  }

  //PUT requests
  createMonitor(newMonitorData: any): Observable<any> {
    const url = this.apiUrl + 'monitor';
    return this.http.put<any>(url, newMonitorData)
  }

  // POST requests
  executeMonitor(monitorId: string): Observable<any> {
    const url = this.apiUrl + 'executor/execute/' + monitorId;
    return this.http.post<any>(url, {});
  }
}
