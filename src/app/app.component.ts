import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./pages/header/header.component";
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "./pages/navbar/navbar.component";
import { BrowserModule } from '@angular/platform-browser';
import { ChartComponent } from './pages/chart/chart.component';
import { CommonModule } from '@angular/common';
import { RadarChartComponent } from "./radar-chart/radar-chart.component";
import { ListComponent } from "./pages/list/list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, ChartComponent, RouterLink, FormsModule, HeaderComponent, NavbarComponent, RadarChartComponent, ListComponent]
})
  export class AppComponent {
  title = 'task';
}

