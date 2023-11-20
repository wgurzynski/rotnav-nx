import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Highcharts from 'highcharts';
import Accessibility from 'highcharts/modules/accessibility';
import { EmissionChartStructure } from '@shared';
Accessibility(Highcharts);

@Component({
  selector: 'app-emissions-chart',
  standalone: true,
  imports: [CommonModule],
  template: `<div id="emissions-chart"></div>`,
  styleUrls: ['./emissions-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmissionsChartComponent {
  @Input({ required: true }) set chartData(chartData: EmissionChartStructure) {
    this.createChartLine(chartData);
  }

  private createChartLine(data: EmissionChartStructure): void {
    Highcharts.chart('emissions-chart', data as any);
  }
}
