export interface EmissionsDropdownOption {
  id: number;
  label?: string | null;
}

export interface EmissionData {
  id: number;
  timeSeries: EmissionTimeSeries[];
}

export interface EmissionTimeSeries {
  report_from_utc: Date;
  report_to_utc: Date;
  co2_emissions: number;
  sox_emissions: number;
  nox_emissions: number;
  pm_emissions: number;
  ch4_emissions: number;
}

export interface EmissionChartStructure {
  colors: string[];
  chart: {
    backgroundColor: string;
    style: {
      color: string;
      border: string;
    };
    zoomType: string;
    borderColor: string;
    borderWidth: number;
    borderRadius: number;
  };
  title: {
    text: string;
    style: {
      color: string;
    };
  };
  credits: {
    enabled: boolean;
  };
  legend: {
    enabled: boolean;
    verticalAlign: string;
    itemStyle: {
      fontWeight: string;
      color: string;
    };
  };
  yAxis: {
    title: {
      text: string;
    };
    gridLineDashStyle: string;
    gridLineWidth: number;
    gridLineColor: string;
    lineColor: string;
    minorGridLineColor: string;
    tickColor: string;
    tickWidth: number;
  };
  xAxis: {
    categories: string[];
    minTickInterval: number;
    gridLineDashStyle: string;
    gridLineColor: string;
    lineColor: string;
    minorGridLineColor: string;
    tickColor: string;
    tickWidth: number;
  };
  tooltip: {
    headerFormat: string;
    pointFormat: string;
    shared: boolean;
    useHTML: boolean;
  };
  series: { name: string; data: number[]; visible?: boolean }[];
}
