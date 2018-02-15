import { Component, OnInit, Input, Output, SimpleChange, EventEmitter } from '@angular/core';
import { Report } from '../../model/report';
import { ReportService } from '../../service/report-service.service';
import { FilterService } from '../../service/filter-service.service';
import { Filter, FilterTypes } from '../../model/filter';
import { ColdObservable } from 'rxjs/testing/ColdObservable';
import { filter } from 'rxjs/operator/filter';
import { ElementRef } from '@angular/core/src/linker/element_ref';

@Component({
    selector: 'app-report-viewer',
    templateUrl: './report-viewer.component.html',
    styleUrls: ['./report-viewer.component.css']
})
export class ReportViewerComponent implements OnInit {
    @Input() reportId: number;
    @Input() framework: string;

    @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();

    filters: Array<Filter> = new Array<Filter>();
    report: Report = new Report();
    colors: string[];
    bodyFilters: string[];
    selectedBodyFilter: string = 'none';
    titleFilters: string[];
    selectedTitleFilter: string = 'none';

    constructor(private service: ReportService, private filterService: FilterService) {
    }

    ngOnInit() {
        this.loadColors();
        this.loadBodyFilters();
        this.loadTitleFilters();
    };

    ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
        for (let propName in changes) {
            let changedProp = changes[propName];
            this.pageLoad();
        }
    };

    //#region change Filters
    changeColor(value: string) {
        var colorFilter = this.filters.find(f => f.type === FilterTypes.Color);

        if (colorFilter === undefined) {
            colorFilter = new Filter();
            colorFilter.type = FilterTypes.Color;
            this.filters.push(colorFilter);
        }
        this.changeFilter(colorFilter, value);   
    };

    changeBodyFilter(){
        var bodyFilter = this.filters.find(f => f.type === FilterTypes.Body);

        if (bodyFilter === undefined) {
            bodyFilter = new Filter();
            bodyFilter.type = FilterTypes.Body;
            this.filters.push(bodyFilter);
        }

        this.changeFilter(bodyFilter, this.selectedBodyFilter);
    };

    changeTitleFilter() {
        var titleFilter = this.filters.find(f => f.type === FilterTypes.Title);

        if(titleFilter === undefined) {
            titleFilter = new Filter();
            titleFilter.type = FilterTypes.Title;
            this.filters.push(titleFilter);
        }

        this.changeFilter(titleFilter, this.selectedTitleFilter);
    };

    changeFilter(filter: Filter, value: string){
        filter.value = value;
        this.loadFilteredReport();
    }
    //#endregion

    //#region Load Report
    loadFilteredReport(){
        this.service.getReportWithFilters(this.reportId, this.filters)
            .subscribe(response => this.reportLoaded(response), error => alert(JSON.stringify(error)));
    }

    pageLoad() {
        this.selectedBodyFilter = 'None';
        this.selectedTitleFilter = 'None';

        let frameworkFilter = this.filters.find(f => f.type === FilterTypes.Framework);

        if(frameworkFilter === undefined){
            frameworkFilter = new Filter();
            frameworkFilter.type = FilterTypes.Framework;
            frameworkFilter.value = this.framework;
            this.filters.push(frameworkFilter);
        }
        else {
            frameworkFilter.value = this.framework;
        }        
        
        this.loadFilteredReport();
    };
    //#endregion

    //#region Load Filters
    loadColors() {
        if (!this.colors) {
            this.filterService.getColors()
                .subscribe(response => this.colors = response, error => alert(JSON.stringify(error)));
        };
    };

    loadBodyFilters() {
        if(!this.bodyFilters)
            this.filterService.getBodyFilters()
                .subscribe(response => this.bodyFilters = response, error => alert(JSON.stringify(error)));
    };

    loadTitleFilters() {
        if(!this.titleFilters)
            this.filterService.getTitleFilters()
                .subscribe(response => this.titleFilters = response, error => alert(JSON.stringify(error)));
    };

    //#endregion

    reportLoaded(response) {
        let formattedReport: string = response.Body.replace('\\r\\n', '<br />');
     
        this.report = response;
        this.change.emit(true);
    };

    closeReport() {
        this.change.emit(false);
    };
}
