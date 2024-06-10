import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartComponent } from "../pages/chart/chart.component";
import { ListComponent } from "../pages/list/list.component";

@Component({
    selector: 'app-radar-chart',
    standalone: true,
    templateUrl: './radar-chart.component.html',
    styleUrl: './radar-chart.component.scss',
    imports: [CommonModule, RouterLink, NgxChartsModule, MatIconModule, ChartComponent, ListComponent]
})
export class RadarChartComponent {
  change:any;
  //  list:any = document.getElementById('list');
  //  graph:any = document.getElementById('graph');
  @ViewChild('graph') graph!: ElementRef;
  @ViewChild('list') list!: ElementRef;
  constructor(private renderer: Renderer2) {this.change=1;}

//   constructor(){
// this.change=1
//   }
changelist(){
  this.change=0;
  this.renderer.addClass(this.list.nativeElement, 'active');
  this.renderer.removeClass(this.graph.nativeElement, 'active');

}
changegraph(){
  this.change=1;
  this.renderer.addClass(this.graph.nativeElement, 'active');
  this.renderer.removeClass(this.list.nativeElement, 'active');

}
  radarChartData = [{
      "name": "Sales",
      "series": [
        { "name": "00:00", "value": 65 },
        { "name": "02:00", "value": 59 },
        { "name": "04:00", "value": 90 },
        { "name": "06:00", "value": 81 },
        { "name": "08:00", "value": 56 },
        { "name": "10:00", "value": 55 },
        { "name": "12:00", "value": 40 },
        { "name": "14:00", "value": 65 },
        { "name": "16:00", "value": 59 },
        { "name": "18:00", "value": 90 },
        { "name": "20:00", "value": 81 },
        { "name": "22:00", "value": 56 }
      ]
    }
  ];

  colorScheme = {
    domain: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf']
  };
}
