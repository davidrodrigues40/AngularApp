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

    colorsLoaded: boolean = false;
    bodyFiltersLoaded: boolean = false;
    titleFiltersLoaded: boolean = false;
    report: Report = null;
    pageLoading: boolean = false;
    filters: Array<Filter> = new Array<Filter>();
    colors: string[];
    bodyFilters: string[];
    selectedBodyFilter: string = 'none';
    titleFilters: string[];
    selectedTitleFilter: string = 'none';

    constructor(private service: ReportService, private filterService: FilterService) {
    }

    ngOnInit() {
        this.setPageStatus();
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

    setPageStatus() {
        var pageLoaded =  this.colorsLoaded && this.bodyFiltersLoaded && this.titleFiltersLoaded && this.report != null;
        this.pageLoading = !pageLoaded;
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
        this.report = null;
        this.setPageStatus();
        
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
        if (!this.colorsLoaded) {
            this.filterService.getColors()
                .subscribe(response => this.gotColors(response), error => alert(JSON.stringify(error)));
        };
    };

    gotColors(response) {
        this.colors = response;
        this.colorsLoaded = true;
        this.setPageStatus();
    }

    loadBodyFilters() {
        if(!this.bodyFiltersLoaded)
            this.filterService.getBodyFilters()
                .subscribe(response => this.gotBodyFilters(response), error => alert(JSON.stringify(error)));
    };

    gotBodyFilters(response){
        this.bodyFilters = response;
        this.bodyFiltersLoaded = true;
        this.setPageStatus();
    }

    loadTitleFilters() {
        if(!this.titleFiltersLoaded)
            this.filterService.getTitleFilters()
                .subscribe(response => this.gotTitleFilters(response), error => alert(JSON.stringify(error)));
    };

    gotTitleFilters(response){
        this.titleFilters = response;
        this.titleFiltersLoaded = true;
        this.setPageStatus();
    }

    //#endregion

    reportLoaded(response: Report) {
        let body: string = JSON.stringify(response.Body);
        body = body.replace(/\\r\\n/g, "<br />");

        console.log(body);
        response.Body = body;

        this.report = response;
        this.change.emit(true);
        this.setPageStatus();
    };

    closeReport() {
        this.change.emit(false);
    };
}
