import { EmissionData } from '../models/emissions.model';
import { generateDropdownOptions, getChartDefinition } from './emissions.helper';
import { VesselsRowData } from '../models/vessels.model';

describe('getChartDefinition', () => {
  const mockEmissionsData: EmissionData = {
    id: 10001,
    timeSeries: [
      {
        report_from_utc: new Date('2023-01-21T05:00:00Z'),
        report_to_utc: new Date('2023-01-22T05:00:00'),
        co2_emissions: 71.93,
        sox_emissions: 1.24,
        nox_emissions: 2.14,
        pm_emissions: 0.28436,
        ch4_emissions: 1.155,
      },
    ],
  };

  it('should return a valid chart structure', () => {
    expect(getChartDefinition(mockEmissionsData, 'testLabel')).toEqual({
      chart: {
        backgroundColor: '#051f46',
        borderColor: '#2ecc71',
        borderRadius: 5,
        borderWidth: 2,
        style: {
          border: '#fff',
          color: '#A2A39C',
        },
        zoomType: 'x',
      },
      colors: ['#f1c40f', '#2ecc71', '#9b59b6', '#e74c3c', '#34b4eb', '#3498db', '#1abc9c', '#f39c12', '#d35400'],
      credits: {
        enabled: false,
      },
      legend: {
        enabled: true,
        itemStyle: {
          color: '#A2A39C',
          fontWeight: 'normal',
        },
        verticalAlign: 'bottom',
      },
      series: [
        {
          data: [1.155],
          name: 'Methane',
        },
        {
          data: [2.14],
          name: 'N0x',
        },
        {
          data: [0.28436],
          name: 'PM',
        },
        {
          data: [1.24],
          name: 'S0x',
        },
        {
          data: [71.93],
          name: 'CO2',
          visible: false,
        },
      ],
      title: {
        style: {
          color: '#A2A39C',
        },
        text: 'testLabel Emissions',
      },
      tooltip: {
        headerFormat: '<div>Date: {point.key}</div>',
        pointFormat: '<div>{series.name}: {point.y}</div>',
        shared: true,
        useHTML: true,
      },
      xAxis: {
        categories: ['21 Jan'],
        gridLineColor: '#A2A39C',
        gridLineDashStyle: 'Dot',
        lineColor: '#A2A39C',
        minTickInterval: 9,
        minorGridLineColor: '#A2A39C',
        tickColor: '#A2A39C',
        tickWidth: 1,
      },
      yAxis: {
        gridLineColor: '#A2A39C',
        gridLineDashStyle: 'Dot',
        gridLineWidth: 1,
        lineColor: '#A2A39C',
        minorGridLineColor: '#A2A39C',
        tickColor: '#A2A39C',
        tickWidth: 1,
        title: {
          text: 'Values',
        },
      },
    });
  });

  it('should generate valid dropdown options', () => {
    const mockVesselsData: VesselsRowData[] = [
      {
        id: 10001,
        name: 'MS Alpha',
        mmsi: 999999901,
        imo: 1023401,
        companyId: 2301,
        companyName: 'Alpha Company',
        startDate: '1998-01-01T00:00:00Z',
        active: true,
        vesselType: 'Dry Cargo',
      },
    ];

    expect(generateDropdownOptions([mockEmissionsData], mockVesselsData)).toEqual([{ id: 10001, label: 'MS Alpha' }]);
  });
});
