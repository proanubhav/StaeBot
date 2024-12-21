import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRoomRatesComponent } from './update-room-rates.component';

describe('UpdateRoomRatesComponent', () => {
  let component: UpdateRoomRatesComponent;
  let fixture: ComponentFixture<UpdateRoomRatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateRoomRatesComponent]
    });
    fixture = TestBed.createComponent(UpdateRoomRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
