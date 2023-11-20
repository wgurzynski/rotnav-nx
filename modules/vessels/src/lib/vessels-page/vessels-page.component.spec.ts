import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VesselsPageComponent } from './vessels-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store, StoreModule } from '@ngrx/store';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { emissionPageReducer } from '@emissions';
import { vesselsPageReducer } from './state/reducers/vessels-page.reducer';

describe('VesselsPageComponent', () => {
  let component: VesselsPageComponent;
  let fixture: ComponentFixture<VesselsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VesselsPageComponent, HttpClientTestingModule, StoreModule.forRoot({ emissions: emissionPageReducer, vessels: vesselsPageReducer })],
      providers: [Store],
    }).compileComponents();

    fixture = TestBed.createComponent(VesselsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
