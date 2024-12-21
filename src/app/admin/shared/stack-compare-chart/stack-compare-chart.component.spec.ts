import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackCompareChartComponent } from './stack-compare-chart.component';

describe('StackCompareChartComponent', () => {
  let component: StackCompareChartComponent;
  let fixture: ComponentFixture<StackCompareChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StackCompareChartComponent]
    });
    fixture = TestBed.createComponent(StackCompareChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
