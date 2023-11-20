import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColDef } from 'ag-grid-community';
import { VesselsPageFacade } from './vessels-page.facade';
import { AgGridModule } from 'ag-grid-angular';
import { Observable } from 'rxjs';
import { VesselsTableComponent } from './components/vessels-table/vessels-table.component';
import { VesselsRowData } from '@shared';

@Component({
  selector: 'ui-vessels-page',
  standalone: true,
  imports: [CommonModule, AgGridModule, VesselsTableComponent],
  templateUrl: './vessels-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VesselsPageComponent {
  private vesselsPageFacade: VesselsPageFacade = inject(VesselsPageFacade);
  readonly columnDefs: ColDef[] = this.vesselsPageFacade.columnDefs;
  readonly rowData$: Observable<VesselsRowData[] | null> = this.vesselsPageFacade.rowData$;
}
