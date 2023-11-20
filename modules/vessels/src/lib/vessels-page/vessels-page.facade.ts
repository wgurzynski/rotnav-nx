import { inject, Injectable } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { BooleanRenderer, dateFormatter } from './utils/cellRenderers.utils';
import { Store } from '@ngrx/store';
import { selectVesselsRowData, VesselsPageState } from './state/reducers/vessels-page.reducer';
import { VesselsRowData } from '@shared';

@Injectable({ providedIn: 'any' })
export class VesselsPageFacade {
  private store: Store<VesselsPageState> = inject(Store<VesselsPageState>);
  readonly rowData$: Observable<VesselsRowData[]> = this.store.select(selectVesselsRowData);
  readonly columnDefs: ColDef[] = [
    { field: 'id' },
    { field: 'name' },
    { field: 'mmsi' },
    { field: 'imo' },
    { field: 'companyId' },
    { field: 'companyName' },
    { field: 'startDate', valueFormatter: dateFormatter },
    { field: 'active', cellRenderer: BooleanRenderer },
    { field: 'vesselType' },
  ];
}
