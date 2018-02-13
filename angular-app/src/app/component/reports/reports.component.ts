import { Component, OnInit } from '@angular/core';
import { ReportListItem } from '../../model/report-list-item';
import { ReportService } from '../../service/report-service.service';
import { ReportDetail } from '../../model/report-detail';

@Component({
    selector: 'app-reports',
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

    reports: ReportListItem[];
    selectedReport: ReportDetail = new ReportDetail();
    reportSelected: boolean = false;

    constructor(private reportService: ReportService) 
    { 
    }

    ngOnInit() {
        this.reportService.getAll().subscribe(response => this.reports = response, error => alert(error));
    };

    getDetails(input: ReportListItem){
        this.reportService.getById(input.Id)
            .subscribe(response => this.showDetails(response), error => alert(error));
    };

    showDetails(response){
        this.selectedReport = response;
        this.reportSelected = true;
    }
}
