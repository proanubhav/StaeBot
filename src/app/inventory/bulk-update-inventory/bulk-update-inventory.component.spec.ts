import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkUpdateInventoryComponent } from './bulk-update-inventory.component';

describe('BulkUpdateInventoryComponent', () => {
  let component: BulkUpdateInventoryComponent;
  let fixture: ComponentFixture<BulkUpdateInventoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BulkUpdateInventoryComponent]
    });
    fixture = TestBed.createComponent(BulkUpdateInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
