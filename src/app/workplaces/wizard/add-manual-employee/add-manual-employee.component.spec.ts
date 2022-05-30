import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddManualEmployeeComponent } from './add-manual-employee.component';

describe('AddManualEmployeeComponent', () => {
  let component: AddManualEmployeeComponent;
  let fixture: ComponentFixture<AddManualEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddManualEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddManualEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
