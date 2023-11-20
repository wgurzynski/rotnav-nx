import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmissionsDropdownComponent } from './emissions-dropdown.component';
import { DropdownChangeEvent } from 'primeng/dropdown/dropdown.interface';

describe('EmissionsDropdownComponent', () => {
  let component: EmissionsDropdownComponent;
  let fixture: ComponentFixture<EmissionsDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmissionsDropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmissionsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit change selected option event', () => {
    const mockedDropdownOption: DropdownChangeEvent = {
      value: {
        id: 1,
        label: 'Test',
      },
    } as DropdownChangeEvent;

    jest.spyOn(component.changeSelectedOption, 'emit');

    component.onChangeSelectedOption(mockedDropdownOption);
    expect(component.changeSelectedOption.emit).toBeCalledWith(mockedDropdownOption.value);
  });
});
