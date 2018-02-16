import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class FilterService {
    url: string = 'http://ReportApi.mysite.com/api/Filters/';
    frameworkFilters: string[] = [ 'Reports', 'US Documents' ];
    constructor(private httpClient: HttpClient) { 
    }

    getColors(): Observable<string[]> {
        return this.getFilter('colors');
    };

    getBodyFilters(): Observable<string[]> {
        return this.getFilter('body');
    };

    getTitleFilters(): Observable<string[]> {
        return this.getFilter('title');
    };

    getFrameworkFilters(): Observable<string[]> {
        return Observable.of(this.frameworkFilters);
    };

    private getFilter(type: string): Observable<string[]> {
        let filterUrl: string = this.url + type;
        return this.httpClient.get<string[]>(filterUrl);
    };
}
