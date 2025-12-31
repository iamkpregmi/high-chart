import { Component } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-high-chart',
  imports: [HighchartsChartModule],
  templateUrl: './high-chart.component.html',
  styleUrl: './high-chart.component.css'
})
// export class HighChartComponent {
//   Highcharts: typeof Highcharts = Highcharts;
//   chartOptions: Highcharts.Options = {
//     series: [{
//       type: 'line',
//       data: [20, 50, 41, 100, 50, 45]
//     }],
//     credits: { enabled: false },
//     title: {
//       text: 'Hight Chart Example',
//       align: 'center'
//     }
//   };
// }

export class HighChartComponent {
  salesData = [
    { month: "January", year: 2024, sales: 45 },
    { month: "February", year: 2024, sales: 72 },
    { month: "March", year: 2024, sales: 61 },
    { month: "April", year: 2024, sales: 29 },
    { month: "May", year: 2024, sales: 88 },
    { month: "June", year: 2024, sales: 53 },
    { month: "July", year: 2024, sales: 96 },
    { month: "August", year: 2024, sales: 34 },
    { month: "September", year: 2024, sales: 70 },
    { month: "October", year: 2024, sales: 48 },
    { month: "November", year: 2024, sales: 81 },
    { month: "December", year: 2024, sales: 66 }
  ];

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Monthly Sales Data (2024)',
      align: 'center'
    },
    xAxis: {
      categories: this.salesData.map(data => data.month),
      title: {
        text: 'Month'
      }
    },
    yAxis: {
      title: {
        text: 'Sales'
      }
    },
    series: [{
      name: 'Sales',
      type: 'line',
      data: this.salesData.map(data => data.sales)
    }],
    credits: { enabled: false }
  };
}