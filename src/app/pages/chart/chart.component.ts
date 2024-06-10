import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
// import  ChartsModule  from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [RouterLink,MatIconModule,NgxChartsModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent {
  barChartData = [
    { name: 'Station 1', value: 250 },
    { name: 'Station 2', value: 150 },
    { name: 'Station 3', value: 200 },
    { name: 'Station 4', value: 100 },
    { name: 'Station 5', value: 150 }
  ];
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#AAAAAA'] // Custom colors
  };
  // radarChartData = [
  //   {
  //     name: 'Hourly Sales',
  //     series: [
  //       { name: '0:00', value: 65 },
  //       { name: '4:00', value: 59 },
  //       { name: '8:00', value: 90 },
  //       { name: '12:00', value: 81 },
  //       { name: '16:00', value: 56 },
  //       { name: '20:00', value: 55 },
  //       { name: '24:00', value: 40 }
  //     ]
  //   }
  // ];
}
