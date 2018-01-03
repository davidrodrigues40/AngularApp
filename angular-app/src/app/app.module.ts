import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SnsTesterComponent } from './component/sns-tester/sns-tester.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MenuComponent } from './component/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    SnsTesterComponent,
    DashboardComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
