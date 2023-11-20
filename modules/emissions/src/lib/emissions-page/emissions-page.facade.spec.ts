import { TestBed } from '@angular/core/testing';
import { EmissionsPageFacade } from './emissions-page.facade';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EmissionsDropdownOption } from '@shared';
import { Store } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';
import { emissionPageReducer } from './state/reducers/emissions-page.reducer';
import { vesselsPageReducer } from '@vessels';

describe('EmissionsPageConnector', () => {
  let service: EmissionsPageFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StoreModule.forRoot({ emissions: emissionPageReducer, vessels: vesselsPageReducer })],
      providers: [Store],
    }).compileComponents();

    service = TestBed.inject(EmissionsPageFacade);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should change selected dropdown option', (done) => {
    const mockDropdownOption: EmissionsDropdownOption = { id: 1, label: 'test' };

    service.selectedDropdownOption$.subscribe((newDropdownOption: EmissionsDropdownOption | null) => {
      expect(newDropdownOption).toEqual(mockDropdownOption);
      done();
    });

    service.changeActiveEmissionSet(mockDropdownOption);
  });
});
