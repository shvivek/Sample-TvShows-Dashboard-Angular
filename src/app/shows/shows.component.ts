import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GridOptions } from 'ag-grid';

import { UserAccount } from './../_models/user-account/user-account.model';
import { Show, Network, Country } from '../_models/show/model-index';
import { ShowColumn } from './../_models/show/show.columnDef';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { ContentService } from '../_services/content.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  public tvShowsColumnDefs = new ShowColumn;
  public rowSelection;
  public selectedShowId;
  public showMetaData: any;

  public gridOptions: GridOptions;

  constructor(private _contentService: ContentService, private _router: Router,
    private _route: ActivatedRoute) {

    // GridOptions Initialized
    this.gridOptions = <GridOptions>{};
    this.gridOptions.columnDefs = this.tvShowsColumnDefs.columnDefs;
    this.rowSelection = 'single';
  }

  ngOnInit() {
    // Prepare Grid Row Data
    this.prepareRowData();
  }

  prepareRowData() {
    // API Call for getting TV-Shows
    this._contentService.getAllShows()
      .subscribe(response => {
        const shows = response;
        console.log('TVShows-API Response ', shows);

        // Setting Grid RowData using api response
        this.gridOptions.api.setRowData(shows);
      });
  }

  /*
   Event Handler Methods
  */

  onRowDoubleClicked(event) {
    console.log('Inside onRowDoubleClicked');
    this.selectedShowId = event.node.data.id;

    // Navigate to Show-Details Page
    this._router.navigate(['show-details', this.selectedShowId], { relativeTo: this._route });

  }







}

