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


@NgModule({
  declarations: [
    AppComponent,
    SnsTesterComponent,
    DashboardComponent,
    MenuComponent,
    SnsMessageComponent,
    SnsMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SnsService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
