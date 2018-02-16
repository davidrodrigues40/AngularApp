import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ReportListItem } from '../model/report-list-item';
import { ReportDetail } from '../model/report-detail';
import { Report } from '../model/report';
import { Filter, FilterTypes } from '../model/filter';
import { element } from 'protractor';

@Injectable()
export class ReportService {
    apiUrl: string = 'http://ReportApi.mysite.com/api/Reports';
    headers: HttpHeaders;
    constructor(private httpClient: HttpClient) {
        this.headers = new HttpHeaders();
        this.headers = this.headers.set('Origin', 'http://localhost:4200');
    }

    getAll(framework: string): Observable<ReportListItem[]> {
        if (framework === null)
            framework = 'reports';
        
        let uri = this.apiUrl + '?framework='+framework;
        return this.httpClient.get<ReportListItem[]>(uri, { headers: this.headers });
    };

    getReportDetails(id: number, framework: string): Observable<ReportDetail> {
        if(framework === null)
            framework = 'reports';
            
        let uri: string = this.apiUrl + '/' + id.toString() + '/details?framework=' + framework;
        return this.httpClient.get<ReportDetail>(uri);
    };

    getReport(id: number): Observable<Report> {
        return this.httpClient.get<Report>(this.apiUrl + '/' + id.toString());
    };

    getReportWithFilters(id: number, filters: Filter[]){
        let url: string = this.apiUrl + '/' + id.toString();
        if(filters == null)
            return this.getReport(id);

        filters.forEach(element => {
            if(url.indexOf('?') === -1)
                url += '?';
            else
                url += '&';

            url += FilterTypes[element.type] + '=' + element.value;
        });
        return this.httpClient.get<Report>(url);
    };
}
