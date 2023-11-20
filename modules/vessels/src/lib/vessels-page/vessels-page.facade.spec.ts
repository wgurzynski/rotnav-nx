import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VesselsPageFacade } from './vessels-page.facade';
import { Store, StoreModule } from '@ngrx/store';
import { vesselsPageReducer } from './state/reducers/vessels-page.reducer';

describe('VesselsPageConnector', () => {
  let service: VesselsPageFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StoreModule.forRoot({ vessels: vesselsPageReducer })],
      providers: [Store],
    }).compileComponents();

    service = TestBed.inject(VesselsPageFacade);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
