import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { AllSalesData, SalesData, SalesDataService } from 'src/app/shared/services/sales-analytics.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  selectedTimeframe: 'custom' | 'week' | 'month' | 'quarter' | 'year' = 'month';
  selectedTimeframe1: 'custom' | 'week' | 'month' | 'quarter' | 'year' = 'month';
  selectedTimeframe2: 'custom' | 'week' | 'month' | 'quarter' | 'year' = 'month';
  selectedTimeframe3: 'custom' | 'week' | 'month' | 'quarter' | 'year' = 'month';
  selectedEmployees: string[] = []; // Use an array for selected employees
  selectedCounter: string[] = []; // Use an array for selected employees
  employees: string[] = ['Partap', 'Pranshu', 'Ram', 'Basant']; // List of employees
  counterList: string[] = ['Readymade', 'Saree', 'Dresses', 'Suits', 'Kids']; // List of employees
  salesStartDate: Date | null = null;
  salesEndDate: Date | null = null;

  salesChartData: SalesData = { categories: [], series: [] };

  chartOptions1!: Highcharts.Options;
  chartOptions2!: Highcharts.Options;
  chartOptionsReturnCompare!: Highcharts.Options;
  chartOptionsMisbehaviorReport!: Highcharts.Options;
  chartOptionsAlterationCompare!: Highcharts.Options;

  // allSalesData!: AllSalesData; // Use the definite assignment assertion


  allSalesData = {
    day: {
      categories: ['1', '2', '3', '4', '5', '6', '7'], // Example for 7 days
      series: [
        { name: 'New (Pranshu)', data: [5, 3, 4, 7, 2, 4, 3], stack: 'Pranshu' },
        { name: 'Old (Pranshu)', data: [2, 2, 3, 2, 1, 3, 4], stack: 'Pranshu' },
        { name: 'New (Partap)', data: [4, 2, 5, 6, 3, 5, 6], stack: 'Partap' },
        { name: 'Old (Partap)', data: [3, 5, 4, 5, 2, 4, 3], stack: 'Partap' }
      ]
    }
  };

  isValidDate(date: any): boolean {
    return date instanceof Date && !isNaN(date.getTime());
  }


  constructor(private salesDataService: SalesDataService) { }

  ngOnInit(): void {
    this.fetchSalesData(); // Fetch data when the component initializes
  }

  fetchSalesData(): void {
    this.updateChartData(); // Update chart data after fetching
    // this.salesDataService.fetchSalesData().subscribe(
    //   (data: AllSalesData) => {
    //     this.allSalesData = data; // Update with fetched data
    //   },
    //   (error) => {
    //     console.error('Error fetching sales data:', error);
    //   }
    // );
  }

  updateChartData(): void {
    this.salesChartData = this.allSalesData['day'];

    this.chartOptions1 = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Sales Data'
      },
      xAxis: {
        categories: this.salesChartData.categories, // Use categories from your data
        title: {
          text: 'Time Period'
        }
      },
      yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
          text: 'Sales Count'
        }
      },
      tooltip: {
        formatter: function () {
          return `<b>${this.point.category} - ${this.series.name}</b><br/>Sales: ${this.y}`;
        }
      },
      plotOptions: {
        column: {
          stacking: 'normal'
        }
      },
      series: this.salesChartData.series.map(series => ({
        type: 'column',
        name: series.name,
        data: series.data,
        stack: series.stack // Optional: if you want to keep stack information
      }))
    };

    this.chartOptions2 = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Sales Data'
      },
      xAxis: {
        categories: this.salesChartData.categories, // Use categories from your data
        title: {
          text: 'Time Period'
        }
      },
      yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
          text: 'Sales Count'
        }
      },
      tooltip: {
        formatter: function () {
          return `<b>${this.point.category} - ${this.series.name}</b><br/>Sales: ${this.y}`;
        }
      },
      plotOptions: {
        column: {
          stacking: 'normal'
        }
      },
      series: this.salesChartData.series.map(series => ({
        type: 'column',
        name: series.name,
        data: series.data,
        stack: series.stack // Optional: if you want to keep stack information
      }))
    };


    //   this.chartOptionsReturnCompare = {
    //     chart: {
    //         type: 'column'
    //     },
    //     title: {
    //         text: 'Domestic passenger transport by mode of transport, Norway',
    //         align: 'left'
    //     },
    //     subtitle: {
    //         text: 'Source: <a href="https://www.ssb.no/transport-og-reiseliv/landtransport/statistikk/innenlandsk-transport">SSB</a>',
    //         align: 'left'
    //     },
    //     xAxis: {
    //         categories: ['2019', '2020', '2021']
    //     },
    //     yAxis: {
    //         min: 0,
    //         title: {
    //             text: 'Percent'
    //         }
    //     },
    //     tooltip: {
    //         pointFormat: '<span style="color:{series.color}">{series.name}</span>' +
    //             ': <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
    //         shared: true
    //     },
    //     plotOptions: {
    //         column: {
    //             stacking: 'percent',
    //             dataLabels: {
    //                 enabled: true,
    //                 format: '{point.percentage:.0f}%'
    //             }
    //         }
    //     },
    //     series: [
    //         {
    //             type: 'column', // Specify the type here
    //             name: 'Road',
    //             data: [434, 290, 307]
    //         },
    //         {
    //             type: 'column', // Specify the type here
    //             name: 'Rail',
    //             data: [272, 153, 156]
    //         },
    //         {
    //             type: 'column', // Specify the type here
    //             name: 'Air',
    //             data: [13, 7, 8]
    //         },
    //         {
    //             type: 'column', // Specify the type here
    //             name: 'Sea',
    //             data: [55, 35, 41]
    //         }
    //     ]
    // };

    this.chartOptionsReturnCompare = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Sales Comparison by Person',
        align: 'left'
      },
      subtitle: {
        text: 'Source: Your Data Source',
        align: 'left'
      },
      xAxis: {
        categories: this.employees  // Each person as a category
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Sales (in units or currency)'
        }
      },
      tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: <b>{point.y}</b><br/>Total: <b>{point.stackTotal}</b>'
      },
      plotOptions: {
        column: {
          stacking: 'normal',  // Stacked, but not in percentage
          dataLabels: {
            enabled: true
          }
        }
      },
      series: [
        {
          type: 'column',
          name: 'Avg Monthly Sales',
          data: [1000, 1250, 666, 833]  // Monthly sales data for each person
        }
      ]
    };

    this.chartOptionsMisbehaviorReport = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Misbehavior Report by Person',
        align: 'left'
      },
      subtitle: {
        text: 'Source: Incident Data',
        align: 'left'
      },
      xAxis: {
        categories: this.employees  // Names or identifiers for each person
      },
      yAxis: {
        min: 0,
        max: 100,  // Grading scale from 1 to 100
        title: {
          text: 'Misbehavior Grading'
        }
      },
      tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: <b>{point.y}</b><br/>Total: <b>{point.stackTotal}</b>'
      },
      plotOptions: {
        column: {
          stacking: 'normal',  // Allows the data to stack for comparison
          dataLabels: {
            enabled: true,
            format: '{y}'  // Displays the grade directly on the bar
          }
        }
      },
      series: [
        {
          type: 'column',
          name: 'Misbehavior Grade',
          data: [78, 45, 62, 90]  // Sample grading data for each person
        }
      ]
    };

    this.chartOptionsAlterationCompare = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Alteration vs Non-Alteration Comparison',
        align: 'center'
      },
      subtitle: {
        text: 'Source: Your Data Source',
        align: 'left'
      },
      xAxis: {
        categories: this.employees  // Each sales person as a category
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Percentage (%)'
        },
        stackLabels: {
          enabled: true,
          style: {
            fontWeight: 'bold',
            color: Highcharts.defaultOptions.title?.style?.color || 'gray'
          }
        }
      },
      tooltip: {
        formatter: function () {
          // Cast the point to the CustomDataPoint type to access custom properties
          const point = this.point as CustomDataPoint;
          const stackTotal = this.total;  // Total of the stacked columns
          return `
            <b>${this.series.name} - ${this.key}</b><br/>
            Alteration: <b>${this.y}%</b><br/>
            Total: <b>${stackTotal}%</b><br/>
            Alteration Amount: <b>${point.alterationAmount}</b><br/>
            Alteration Quantity: <b>${point.alterationQty}</b><br/>
            Total Amount: <b>${point.totalAmount}</b><br/>
            Total Quantity: <b>${point.totalQty}</b>
          `;
        }
      },
      plotOptions: {
        column: {
          stacking: 'normal',  // Stacked
          dataLabels: {
            enabled: true
          }
        }
      },
      series: [
        {
          type: 'column',
          name: 'Alteration Percentage',
          data: [
            { y: 50, alterationAmount: 500, totalAmount: 1000, alterationQty: 5, totalQty: 10 } as CustomDataPoint,
            { y: 60, alterationAmount: 600, totalAmount: 1200, alterationQty: 6, totalQty: 10 } as CustomDataPoint,
            { y: 45, alterationAmount: 450, totalAmount: 900, alterationQty: 4, totalQty: 10 } as CustomDataPoint,
            { y: 80, alterationAmount: 800, totalAmount: 1000, alterationQty: 8, totalQty: 10 } as CustomDataPoint
          ],
          tooltip: {
            valueSuffix: '%'
          }
        },
        {
          type: 'column',
          name: 'Non-Alteration Percentage',
          data: [
            { y: 50, alterationAmount: 500, totalAmount: 1000, alterationQty: 5, totalQty: 10 } as CustomDataPoint,
            { y: 40, alterationAmount: 400, totalAmount: 800, alterationQty: 4, totalQty: 10 } as CustomDataPoint,
            { y: 55, alterationAmount: 550, totalAmount: 1100, alterationQty: 5, totalQty: 10 } as CustomDataPoint,
            { y: 20, alterationAmount: 200, totalAmount: 1000, alterationQty: 2, totalQty: 10 } as CustomDataPoint
          ],
          tooltip: {
            valueSuffix: '%'
          }
        }
      ]
    };
  }


  onTimeframeChange1(selected: string): void {
    this.selectedTimeframe1 = selected as 'custom' | 'week' | 'month' | 'quarter' | 'year';
    this.updateChartData1();
  }
  onTimeframeChange2(selected: string): void {
    this.selectedTimeframe2 = selected as 'custom' | 'week' | 'month' | 'quarter' | 'year';
    this.updateChartData2();
  }
  onTimeframeChange3(selected: string): void {
    this.selectedTimeframe3 = selected as 'custom' | 'week' | 'month' | 'quarter' | 'year';
    this.updateChartDataForAlteration(selected);
  }

  updateChartData1(): void {
    // Update data based on the selected timeframe
    switch (this.selectedTimeframe1) {
      case 'week':
        this.chartOptionsReturnCompare.series = [
          { type: 'column', name: 'Weekly Sales', data: [500, 700, 400, 600] },
          { type: 'column', name: 'Avg Weekly Sales', data: [50, 70, 40, 60] },
          { type: 'column', name: 'Daily Sales', data: [10, 14, 8, 12] }
        ];
        break;

      case 'month':
        this.chartOptionsReturnCompare.series = [
          { type: 'column', name: 'Monthly Sales', data: [3000, 3500, 2500, 2800] },
          { type: 'column', name: 'Avg Monthly Sales', data: [100, 125, 83, 93] },
          { type: 'column', name: 'Daily Sales', data: [33, 42, 28, 31] }
        ];
        break;

      case 'quarter':
        this.chartOptionsReturnCompare.series = [
          { type: 'column', name: 'Quarterly Sales', data: [10000, 12000, 9000, 9500] },
          { type: 'column', name: 'Avg Monthly Sales', data: [333, 400, 300, 317] },
          { type: 'column', name: 'Avg Daily Sales', data: [11, 13, 10, 10.5] }
        ];
        break;

      case 'year':
        this.chartOptionsReturnCompare.series = [
          { type: 'column', name: 'Yearly Sales', data: [12000, 15000, 8000, 10000] },
          { type: 'column', name: 'Avg Monthly Sales', data: [1000, 1250, 666, 833] },
          { type: 'column', name: 'Avg Daily Sales', data: [33, 42, 22, 28] }
        ];
        break;

      case 'custom':
        // If custom, adjust data based on the selected date range (salesStartDate and salesEndDate)
        this.chartOptionsReturnCompare.series = [
          // Example custom data based on date range
          { type: 'column', name: 'Custom Sales', data: [6000, 7000, 4000, 5000] },
          { type: 'column', name: 'Avg Sales', data: [500, 600, 300, 400] },
        ];
        break;

    }
    // Update the chart by triggering a redraw
    this.chartOptionsReturnCompare = { ...this.chartOptionsReturnCompare };  // This will trigger Angular change detection
  }

  updateChartData2(): void {
  // Update data based on the selected timeframe for misbehavior grading
  switch (this.selectedTimeframe2) {
    case 'week':
      this.chartOptionsMisbehaviorReport.series = [
        { type: 'column', name: 'Weekly Misbehavior', data: [45, 60, 30, 55] }
      ];
      break;

    case 'month':
      this.chartOptionsMisbehaviorReport.series = [
        { type: 'column', name: 'Monthly Misbehavior', data: [70, 80, 50, 65] }
      ];
      break;

    case 'quarter':
      this.chartOptionsMisbehaviorReport.series = [
        { type: 'column', name: 'Quarterly Misbehavior', data: [85, 90, 75, 80] }
      ];
      break;

    case 'year':
      this.chartOptionsMisbehaviorReport.series = [
        { type: 'column', name: 'Yearly Misbehavior', data: [90, 95, 85, 88] }
      ];
      break;

    case 'custom':
      // Custom grading based on the date range, example placeholder data
      this.chartOptionsMisbehaviorReport.series = [
        { type: 'column', name: 'Custom Misbehavior', data: [65, 70, 55, 60] }
      ];
      break;
  }

  // Trigger Angular change detection to update the chart
  this.chartOptionsMisbehaviorReport = { ...this.chartOptionsMisbehaviorReport };
}

updateChartDataForAlteration(selected: string): void {
  // Update data based on the selected timeframe
  switch (selected) {
    case 'week':
      this.chartOptionsAlterationCompare.series = [
        {
          type: 'column',
          name: 'Alteration Percentage',
          data: [
            { y: 60, alterationAmount: 600, totalAmount: 1000, alterationQty: 6, totalQty: 10 } as CustomDataPoint,
            { y: 70, alterationAmount: 700, totalAmount: 1200, alterationQty: 7, totalQty: 10 } as CustomDataPoint,
            { y: 50, alterationAmount: 500, totalAmount: 900, alterationQty: 5, totalQty: 10 } as CustomDataPoint,
            { y: 65, alterationAmount: 650, totalAmount: 1000, alterationQty: 6.5, totalQty: 10 } as CustomDataPoint
          ]
        },
        {
          type: 'column',
          name: 'Non-Alteration Percentage',
          data: [
            { y: 40, alterationAmount: 400, totalAmount: 800, alterationQty: 4, totalQty: 10 } as CustomDataPoint,
            { y: 30, alterationAmount: 300, totalAmount: 600, alterationQty: 3, totalQty: 10 } as CustomDataPoint,
            { y: 50, alterationAmount: 500, totalAmount: 900, alterationQty: 5, totalQty: 10 } as CustomDataPoint,
            { y: 35, alterationAmount: 350, totalAmount: 700, alterationQty: 3.5, totalQty: 10 } as CustomDataPoint
          ]
        }
      ];
      break;

    case 'month':
      this.chartOptionsAlterationCompare.series = [
        {
          type: 'column',
          name: 'Alteration Percentage',
          data: [
            { y: 55, alterationAmount: 550, totalAmount: 1000, alterationQty: 5.5, totalQty: 10 } as CustomDataPoint,
            { y: 65, alterationAmount: 650, totalAmount: 1100, alterationQty: 6.5, totalQty: 10 } as CustomDataPoint,
            { y: 45, alterationAmount: 450, totalAmount: 900, alterationQty: 4.5, totalQty: 10 } as CustomDataPoint,
            { y: 75, alterationAmount: 750, totalAmount: 1000, alterationQty: 7.5, totalQty: 10 } as CustomDataPoint
          ]
        },
        {
          type: 'column',
          name: 'Non-Alteration Percentage',
          data: [
            { y: 45, alterationAmount: 450, totalAmount: 800, alterationQty: 4.5, totalQty: 10 } as CustomDataPoint,
            { y: 35, alterationAmount: 350, totalAmount: 700, alterationQty: 3.5, totalQty: 10 } as CustomDataPoint,
            { y: 55, alterationAmount: 550, totalAmount: 900, alterationQty: 5.5, totalQty: 10 } as CustomDataPoint,
            { y: 25, alterationAmount: 250, totalAmount: 600, alterationQty: 2.5, totalQty: 10 } as CustomDataPoint
          ]
        }
      ];
      break;

    case 'quarter':
      this.chartOptionsAlterationCompare.series = [
        {
          type: 'column',
          name: 'Alteration Percentage',
          data: [
            { y: 65, alterationAmount: 650, totalAmount: 1300, alterationQty: 6.5, totalQty: 10 } as CustomDataPoint,
            { y: 75, alterationAmount: 750, totalAmount: 1400, alterationQty: 7.5, totalQty: 10 } as CustomDataPoint,
            { y: 55, alterationAmount: 550, totalAmount: 1200, alterationQty: 5.5, totalQty: 10 } as CustomDataPoint,
            { y: 85, alterationAmount: 850, totalAmount: 1500, alterationQty: 8.5, totalQty: 10 } as CustomDataPoint
          ]
        },
        {
          type: 'column',
          name: 'Non-Alteration Percentage',
          data: [
            { y: 35, alterationAmount: 350, totalAmount: 700, alterationQty: 3.5, totalQty: 10 } as CustomDataPoint,
            { y: 25, alterationAmount: 250, totalAmount: 500, alterationQty: 2.5, totalQty: 10 } as CustomDataPoint,
            { y: 45, alterationAmount: 450, totalAmount: 900, alterationQty: 4.5, totalQty: 10 } as CustomDataPoint,
            { y: 15, alterationAmount: 150, totalAmount: 300, alterationQty: 1.5, totalQty: 10 } as CustomDataPoint
          ]
        }
      ];
      break;

    case 'year':
      this.chartOptionsAlterationCompare.series = [
        {
          type: 'column',
          name: 'Alteration Percentage',
          data: [
            { y: 70, alterationAmount: 700, totalAmount: 1400, alterationQty: 7, totalQty: 10 } as CustomDataPoint,
            { y: 80, alterationAmount: 800, totalAmount: 1600, alterationQty: 8, totalQty: 10 } as CustomDataPoint,
            { y: 60, alterationAmount: 600, totalAmount: 1200, alterationQty: 6, totalQty: 10 } as CustomDataPoint,
            { y: 90, alterationAmount: 900, totalAmount: 1800, alterationQty: 9, totalQty: 10 } as CustomDataPoint
          ]
        },
        {
          type: 'column',
          name: 'Non-Alteration Percentage',
          data: [
            { y: 30, alterationAmount: 300, totalAmount: 600, alterationQty: 3, totalQty: 10 } as CustomDataPoint,
            { y: 20, alterationAmount: 200, totalAmount: 400, alterationQty: 2, totalQty: 10 } as CustomDataPoint,
            { y: 40, alterationAmount: 400, totalAmount: 800, alterationQty: 4, totalQty: 10 } as CustomDataPoint,
            { y: 10, alterationAmount: 100, totalAmount: 200, alterationQty: 1, totalQty: 10 } as CustomDataPoint
          ]
        }
      ];
      break;

    case 'custom':
      this.chartOptionsAlterationCompare.series = [
        {
          type: 'column',
          name: 'Alteration Percentage',
          data: [
            { y: 75, alterationAmount: 750, totalAmount: 1500, alterationQty: 7.5, totalQty: 10 } as CustomDataPoint,
            { y: 85, alterationAmount: 850, totalAmount: 1700, alterationQty: 8.5, totalQty: 10 } as CustomDataPoint,
            { y: 65, alterationAmount: 650, totalAmount: 1300, alterationQty: 6.5, totalQty: 10 } as CustomDataPoint,
            { y: 95, alterationAmount: 950, totalAmount: 1900, alterationQty: 9.5, totalQty: 10 } as CustomDataPoint
          ]
        },
        {
          type: 'column',
          name: 'Non-Alteration Percentage',
          data: [
            { y: 25, alterationAmount: 250, totalAmount: 500, alterationQty: 2.5, totalQty: 10 } as CustomDataPoint,
            { y: 15, alterationAmount: 150, totalAmount: 300, alterationQty: 1.5, totalQty: 10 } as CustomDataPoint,
            { y: 35, alterationAmount: 350, totalAmount: 700, alterationQty: 3.5, totalQty: 10 } as CustomDataPoint,
            { y: 5, alterationAmount: 50, totalAmount: 100, alterationQty: 0.5, totalQty: 10 } as CustomDataPoint
          ]
        }
      ];
      break;
  }

  // Trigger change detection
  this.chartOptionsAlterationCompare = { ...this.chartOptionsAlterationCompare };
}




  onTimeframeChange(selected: string): void {
    this.selectedTimeframe = selected as 'custom' | 'week' | 'month' | 'quarter' | 'year';
    this.updateChartData();
  }

  onEmployeeChange(selected: string[]): void {
    this.selectedEmployees = selected; // Update selected employees
    console.log('Selected Employees:', this.selectedEmployees); // Debug output
  }

  onCounterChange(selected: string[]): void {
    this.selectedCounter = selected; // Update selected counter
    console.log('Selected Counter:', this.selectedCounter); // Debug output
    // Call any function to update chart or data based on selected employees
  }
}

interface CustomDataPoint extends Highcharts.PointOptionsObject {
  alterationAmount?: number;
  totalAmount?: number;
  alterationQty?: number;
  totalQty?: number;
}