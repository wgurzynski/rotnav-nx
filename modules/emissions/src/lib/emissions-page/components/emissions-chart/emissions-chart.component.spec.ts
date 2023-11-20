import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmissionsChartComponent } from './emissions-chart.component';
import { EmissionChartStructure } from '@shared';
import { Store, StoreModule } from '@ngrx/store';
import { emissionPageReducer } from '../../state/reducers/emissions-page.reducer';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { vesselsPageReducer } from '@vessels';

describe('EmissionsChartComponent', () => {
  let component: EmissionsChartComponent;
  let fixture: ComponentFixture<EmissionsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmissionsChartComponent, StoreModule.forRoot({ emissions: emissionPageReducer, vessels: vesselsPageReducer })],
      providers: [Store],
    }).compileComponents();

    fixture = TestBed.createComponent(EmissionsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger creation of chart on input passed', () => {
    const mockInputChartData: EmissionChartStructure = {
      colors: ['#f1c40f'],
      chart: {
        backgroundColor: '#051f46',
        style: {
          color: '#A2A39C',
          border: '#fff',
        },
        zoomType: 'x',
        borderColor: '#2ecc71',
        borderWidth: 2,
        borderRadius: 5,
      },
      title: {
        text: 'Test',
        style: {
          color: '#A2A39C',
        },
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: true,
        verticalAlign: 'bottom',
        itemStyle: {
          fontWeight: 'normal',
          color: '#A2A39C',
        },
      },
      yAxis: {
        title: {
          text: 'Values',
        },
        gridLineDashStyle: 'Dot',
        gridLineWidth: 1,
        gridLineColor: '#A2A39C',
        lineColor: '#A2A39C',
        minorGridLineColor: '#A2A39C',
        tickColor: '#A2A39C',
        tickWidth: 1,
      },
      xAxis: {
        categories: ['1 Jan'],
        minTickInterval: 9,
        gridLineDashStyle: 'Dot',
        gridLineColor: '#A2A39C',
        lineColor: '#A2A39C',
        minorGridLineColor: '#A2A39C',
        tickColor: '#A2A39C',
        tickWidth: 1,
      },
      tooltip: {
        headerFormat: '<div>Date: {point.key}</div>',
        pointFormat: '<div>{series.name}: {point.y}</div>',
        shared: true,
        useHTML: true,
      },
      series: [
        {
          name: 'Methane',
          data: [1.51],
        },
        {
          name: 'N0x',
          data: [2.14],
        },
        {
          name: 'PM',
          data: [0.28424],
        },
        {
          name: 'S0x',
          data: [1.62],
        },
        {
          name: 'CO2',
          data: [94.05],
          visible: false,
        },
      ],
    };

    jest.spyOn(component as any, 'createChartLine');
    component.chartData = mockInputChartData;

    expect(component['createChartLine']).toHaveBeenCalledWith(mockInputChartData);
  });
});
