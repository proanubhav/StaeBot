import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-stack-compare-chart',
  templateUrl: './stack-compare-chart.component.html',
  styleUrls: ['./stack-compare-chart.component.scss']
})
export class StackCompareChartComponent implements OnInit {
//   @Input() chartData: { categories: string[]; series: any[] } | undefined; // Define the Input property
//   @Input() containerId: string = 'chartContainer'; // Unique ID for the chart container

//   constructor() {}

//   ngOnInit(): void {
//     this.createChart(); // Initial chart creation
//   }

//   ngOnChanges(changes: SimpleChanges): void {
//     // Check if the chartData input has changed
//     if (changes['chartData']) {
//       this.createChart(); // Recreate the chart when chartData changes
//     }
//   }

//   createChart(): void {
//     if (!this.chartData) return; // Ensure chartData is defined

//     const chartOptions: Highcharts.Options = {
//       chart: {
//         type: 'column',
//         renderTo: this.containerId,
//       },
//       title: {
//         text: 'Sales Data',
//         align: 'left',
//       },
//       xAxis: {
//         categories: this.chartData.categories,
//         title: {
//           text: 'Time Period',
//         },
//       },
//       yAxis: {
//         allowDecimals: false,
//         min: 0,
//         title: {
//           text: 'Sales Count',
//         },
//       },
//       tooltip: {
//         formatter: function () {
//           return `<b>${this.point.category} - ${this.series.name}</b><br/>Sales: ${this.y}<br/>Total: ${this.point}`;
//         },
//       },
//       plotOptions: {
//         column: {
//           stacking: 'normal',
//         },
//       },
//       series: this.chartData.series,
//     };

//     // Clear previous chart instance if it exists
//     Highcharts.chart(this.containerId, chartOptions);
//   }
// }


@Input() chartOptions!: Highcharts.Options; // Use non-null assertion operator
Highcharts: typeof Highcharts = Highcharts; // Reference to Highcharts library

constructor() {}

ngOnInit(): void {}
}