import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtaCommissionComponent } from './ota-commission.component';

describe('OtaCommissionComponent', () => {
  let component: OtaCommissionComponent;
  let fixture: ComponentFixture<OtaCommissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtaCommissionComponent]
    });
    fixture = TestBed.createComponent(OtaCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
