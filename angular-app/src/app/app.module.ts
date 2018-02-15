import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SnsTesterComponent } from './component/sns-tester/sns-tester.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MenuComponent } from './component/menu/menu.component';
import { SnsMessageComponent } from './component/sns-message/sns-message.component';
import { SnsMenuComponent } from './component/sns-menu/sns-menu.component';
import { SnsService } from './service/sns.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SnsTopicComponent } from './component/sns-topic/sns-topic.component';
import { SnsResponseHandler } from './component/sns-response-handler/sns-response-handler.component';
import { SnsSubscribeComponent } from './component/sns-subscribe/sns-subscribe.component';
import { TopicSelectorComponent } from './component/topic-selector/topic-selector.component';
import { SnsUnsubscribeComponent } from './component/sns-unsubscribe/sns-unsubscribe.component';
import { SnsSubscriptionsComponent } from './component/sns-subscriptions/sns-subscriptions.component';
import { ReportService } from './service/report-service.service';
import { ReportsComponent } from './component/reports/reports.component';
import { ReportViewerComponent } from './component/report-viewer/report-viewer.component';
import { FilterService } from './service/filter-service.service';


@NgModule({
  declarations: [
    AppComponent,
    SnsTesterComponent,
    DashboardComponent,
    MenuComponent,
    SnsMessageComponent,
    SnsMenuComponent,
    SnsTopicComponent,
    SnsResponseHandler,
    SnsSubscribeComponent,
    TopicSelectorComponent,
    SnsUnsubscribeComponent,
    SnsSubscriptionsComponent,
    ReportsComponent,
    ReportViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SnsService, ReportService, FilterService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
