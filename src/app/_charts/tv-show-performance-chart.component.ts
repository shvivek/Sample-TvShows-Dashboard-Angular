import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { AmChartsService } from '@amcharts/amcharts3-angular';
import 'amcharts3/amcharts/amcharts';
import 'amcharts3/amcharts/serial';
import 'amcharts3/amcharts/themes/patterns';

@Component({
  selector: 'app-tv-show-performance-chart',
  templateUrl: './tv-show-performance-chart.component.html',
  styleUrls: ['./tv-show-performance-chart.component.css']
})
export class TvShowPerformanceChartComponent implements OnChanges {

  @Input('chartData') chartData: any;
  @Input('dataPoints') dataPoints: any[];
  chart: any;

  // Countries Table Variables
  countries = [
    { id: '1', name: 'CA', rating: '34.33' },
    { id: '2', name: 'FR', rating: '28.15' },
    { id: '3', name: 'BR', rating: '22.14' },
    { id: '4', name: 'IN', rating: '20.75' },
    { id: '5', name: 'US', rating: '19.21' }
  ];

  constructor(private AmCharts: AmChartsService) { }

  ngOnChanges() {
    // Setting the data in the chart dataProvider
    console.log('ChartData : ', this.chartData);
    console.log('dataPoints : ', this.dataPoints);
    this.createChart(this.chartData, this.dataPoints);
  }

  createChart(metaData: any[], dataPoints: any[]) {
    console.log('Creating Chart');

    this.chart = this.AmCharts.makeChart('tvShowChartId', {
      'type': 'serial',
      'categoryField': 'date',
      'dataDateFormat': 'YYYY-MM-DD',
      'categoryAxis': {
        'parseDates': true
      },
      'chartCursor': {
        'enabled': true
      },
      'trendLines': [],
      'graphs': [
        {
          'bullet': 'round',
          'id': 'AmGraph-1',
          'title': 'CA',
          'valueField': 'c1'
        },
        {
          'bullet': 'round',
          'id': 'AmGraph-2',
          'title': 'FR',
          'valueField': 'c2'
        },
        {
          'bullet': 'round',
          'id': 'AmGraph-3',
          'title': 'BR',
          'valueField': 'c3'
        },
        {
          'bullet': 'round',
          'id': 'AmGraph-4',
          'title': 'IN',
          'valueField': 'c4'
        },
        {
          'bullet': 'round',
          'id': 'AmGraph-5',
          'title': 'US',
          'valueField': 'c5'
        }
      ],
      'guides': [],
      'valueAxes': [
        {
          'id': 'ValueAxis-1',
          'title': 'Rating'
        }
      ],
      'allLabels': [],
      'balloon': {},
      'legend': {
        'enabled': true,
        'useGraphSettings': true
      },
      'titles': [
        {
          'id': 'Title-1',
          'size': 15,
          'text': metaData['name']
        },
        {
          'id': 'Title-1',
          'size': 12,
          'text': 'Show Performace'
        }
      ],
      'dataProvider': dataPoints
    });
  }


}
