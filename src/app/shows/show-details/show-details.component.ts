import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from './../../_services/content.service';
import { TvShowPerformanceChartComponent } from './charts/tv-show-performance-chart.component';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  showId: any;
  showsMetaData: any;

  // DataPoint Varibles
  factor_min_limit = 1;
  factor_max_limit = 100;
  dataPointsArray: Array<{
    date: string, c1: number, c2: number, c3: number,
    c4: number, c5: number
  }>;

  constructor(private _contentService: ContentService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.showId = this.route.snapshot.paramMap.get('id');
    console.log('Show Id - ', this.showId);

    // API Call for getting show meta-data by showId
    this._contentService.getShowById(this.showId)
      .subscribe(metaData => {
        console.log('Show MetaData from API : ', metaData);
        this.showsMetaData = metaData;
        this.prepareTimeSeriesChartData(metaData);
      });
  }

  prepareTimeSeriesChartData(metaData: any) {

    //Generate Dates

    // Get title name from metadata

    // prepare datapoints array of countries and factor values 

    this.dataPointsArray = [
      {
        'date': '2017-12-01', 'c1': 24.45, 'c2': 18.23, 'c3': 15.33,
        'c4': 25.22, 'c5': 19.43
      },
      {
        'date': '2017-12-05', 'c1': 18.11, 'c2': 20.44, 'c3': 29.34,
        'c4': 35.12, 'c5': 18.22,
      },
      {
        'date': '2017-12-10', 'c1': 25.22, 'c2': 25.33, 'c3': 18.65,
        'c4': 27.32, 'c5': 21.23
      },
      {
        'date': '2017-12-15', 'c1': 19.43, 'c2': 31.33, 'c3': 13.34,
        'c4': 26.63, 'c5': 25.34
      },
      {
        'date': '2017-12-20', 'c1': 29.34, 'c2': 14.12, 'c3': 17.22,
        'c4': 21.22, 'c5': 20.45
      },
      {
        'date': '2017-12-25', 'c1': 26.32, 'c2': 10.23, 'c3': 20.45,
        'c4': 20.33, 'c5': 26.34
      },
      {
        'date': '2017-12-30', 'c1': 16.22, 'c2': 8.22, 'c3': 12.45,
        'c4': 18.33, 'c5': 14.34
      }
    ];
  }

  /*
    Helper Methods for building data
  */

  getCountryFactor() {
    let factorList = [];

    for (var index = 1; index <= 10; index++) {
      factorList.push(this.getRandomInt(this.factor_min_limit, this.factor_max_limit));
    }
    console.log('FactorList :', factorList);
    return factorList;
  }

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)).toFixed(4) + min;
  }

  getDatesList() {

    const dateList = ['2017-12-1', '2017-12-2', '2017-12-3', '2017-12-4',
      '2017-12-5', '2017-12-6', '2017-12-7', '2017-12-8',
      '2017-12-9', '2017-12-10', '2017-12-11', '2017-12-12',
      '2017-12-13', '2017-12-14', '2017-12-15', '2017-12-16',
      '2017-12-17', '2017-12-18', '2017-12-19', '2017-12-20',
      '2017-12-21', '2017-12-22', '2017-12-23', '2017-12-24',
      '2017-12-25', '2017-12-26', '2017-12-27', '2017-12-28',
      '2017-12-29', '2017-12-30', '2017-12-31'
    ];
    console.log('dateList :', dateList);
    return dateList;
  }






}
