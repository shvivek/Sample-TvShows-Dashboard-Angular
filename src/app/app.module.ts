import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule} from '@angular/router';
import { AgGridModule } from 'ag-grid-angular/main';
import { AmChartsModule } from '@amcharts/amcharts3-angular';
import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { ShowsComponent } from './shows/shows.component';
import { ShowDetailsComponent } from './shows/show-details/show-details.component';
import { ContentService } from './_services/content.service';
import { AuthService } from './_services/auth.service';
import { TvShowPerformanceChartComponent } from './_charts/tv-show-performance-chart.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowsComponent,
    ShowDetailsComponent,
    TvShowPerformanceChartComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgGridModule.withComponents([]),
    AmChartsModule
  ],
  providers: [ContentService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
