import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { EmissionsPageFacade } from './emissions-page.facade';
import { EmissionsChartComponent } from './components/emissions-chart/emissions-chart.component';
import { EmissionsDropdownComponent } from './components/emissions-dropdown/emissions-dropdown.component';
import { EmissionChartStructure, EmissionsDropdownOption } from '@shared';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-emissions-page',
  standalone: true,
  imports: [CommonModule, EmissionsChartComponent, EmissionsDropdownComponent, PanelModule],
  templateUrl: './emissions-page.component.html',
  styleUrls: ['./emissions-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmissionsPageComponent implements OnInit {
  private emissionsPageFacade: EmissionsPageFacade = inject(EmissionsPageFacade);
  readonly activeChartData$: Observable<EmissionChartStructure | null> = this.emissionsPageFacade.activeChartData$;
  readonly dropdownOptions$: Observable<EmissionsDropdownOption[]> = this.emissionsPageFacade.dropdownOptions$;
  readonly activeEmissionSet$: Observable<EmissionsDropdownOption | null> = this.emissionsPageFacade.selectedDropdownOption$;

  ngOnInit(): void {
    this.emissionsPageFacade.onEnter();
  }

  onChangeSelectedOption(option: EmissionsDropdownOption): void {
    this.emissionsPageFacade.changeActiveEmissionSet(option);
  }
}
