import { Component, OnInit } from '@angular/core';
import { ReportListItem } from '../../model/report-list-item';
import { ReportService } from '../../service/report-service.service';
import { ReportDetail } from '../../model/report-detail';
import { FilterService } from '../../service/filter-service.service';
import { Filter, FilterTypes } from '../../model/filter';

@Component({
    selector: 'app-reports',
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
    filters: Array<Filter> = new Array<Filter>();
    detailsLoading: boolean = false;
    reports: ReportListItem[];
    selectedReport: ReportDetail = new ReportDetail();
    reportSelected: boolean = false;
    viewReportId: number = 0;
    viewReport: boolean = false;
    frameworkFilters: string[] = null;
    selectedFramework: string = 'Reports';
    framework: string = 'reports';

    constructor(private reportService: ReportService, private filterService: FilterService) 
    { 
    }

    ngOnInit() {
        this.loadFilters();
        this.loadReports('reports');
    };

    getDetails(id: number){
        this.detailsLoading = true;
        this.reportService.getReportDetails(id, this.framework)
            .subscribe(response => this.showDetails(response), error => alert(error));
    };

    showDetails(response){
        this.selectedReport = response;
        this.detailsLoading = false;
        this.reportSelected = true;
    };

    loadReports(framework: string){
        this.reportService.getAll(framework)
            .subscribe(response => this.reportLoaded(response), error => alert(error))
    };

    reportLoaded(response) {
        this.reports = response
    }

    getReport(id: number){
        this.viewReport = true;
        this.viewReportId = id;
    };

    gotReport(value: boolean){
        if(value === true || value === false)
            this.viewReport = value;
        else
            this.viewReport = true;
    };

    loadFilters() {
        if (this.frameworkFilters == null){
            this.filterService.getFrameworkFilters()
                .subscribe(response => this.frameworkFilters = response, error => alert(JSON.stringify(error)));
        }
    };

    getFramework(index: number, item:any){
        return this.selectedFramework;
    }

    changeFramework() {
        this.viewReport = false;
        this.reportSelected = false;
        this.framework = this.selectedFramework.toLowerCase() === 'reports'? 'reports':'usdocuments';
        this.loadReports(this.framework);
    };
}
