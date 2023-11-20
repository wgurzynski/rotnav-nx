import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmissionsPageComponent } from './emissions-page.component';
import { EmissionsPageFacade } from './emissions-page.facade';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Injectable } from '@angular/core';
import { EmissionsDropdownOption } from '@shared';
import { Store } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';

describe('EmissionsPageComponent', () => {
  let component: EmissionsPageComponent;
  let fixture: ComponentFixture<EmissionsPageComponent>;

  @Injectable()
  class MockEmissionPageConnector {
    changeActiveEmissionSet(): void {
      jest.fn();
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmissionsPageComponent, HttpClientTestingModule, BrowserAnimationsModule, StoreModule.forRoot({})],
      providers: [{ provide: EmissionsPageFacade, useClass: MockEmissionPageConnector }, Store],
    }).compileComponents();

    fixture = TestBed.createComponent(EmissionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger change selected output ', () => {
    const mockDropdownOption: EmissionsDropdownOption = { id: 1, label: 'test' };
    const connectorySpy: jest.SpyInstance = jest.spyOn(component['emissionsPageFacade'], 'changeActiveEmissionSet');

    component.onChangeSelectedOption(mockDropdownOption);
    expect(connectorySpy).toBeCalledWith(mockDropdownOption);
  });
});
