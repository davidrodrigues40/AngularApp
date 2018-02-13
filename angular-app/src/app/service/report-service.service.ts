import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ReportListItem } from '../model/report-list-item';
import { ReportDetail } from '../model/report-detail';

@Injectable()
export class ReportService {
    apiUrl: string = 'http://ReportApi.mysite.com/api/Reports';
    headers: HttpHeaders;
    constructor(private httpClient: HttpClient) {
        this.headers = new HttpHeaders();
        this.headers = this.headers.set('Origin', 'http://localhost:4200');
    }

    getAll(): Observable<ReportListItem[]> {
        return this.httpClient.get<ReportListItem[]>(this.apiUrl, { headers: this.headers });
    };

    getById(id: number): Observable<ReportDetail> {
        return this.httpClient.get<ReportDetail>(this.apiUrl + '/' + id.toString() + '/details');
    }
}
