import { Component } from '@angular/core';

@Component({
  selector: 'app-bulk-update-inventory',
  templateUrl: './bulk-update-inventory.component.html',
  styleUrls: ['./bulk-update-inventory.component.scss']
})
export class BulkUpdateInventoryComponent {
  days = [
    { name: 'Sun', selected: false },
    { name: 'Mon', selected: false },
    { name: 'Tue', selected: false },
    { name: 'Wed', selected: false },
    { name: 'Thu', selected: false },
    { name: 'Fri', selected: false },
    { name: 'Sat', selected: false }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  isAllSelected(): boolean {
    return this.days.every(day => day.selected);
  }
  isAnySelected(): boolean {
    return this.days.some(day => day.selected);
  }
  isIndeterminate(): boolean {
    const selectedDays = this.days.filter(day => day.selected).length;
    return selectedDays > 0 && selectedDays < this.days.length;
  }

  // Toggle selection for all days
  toggleAllDays(isChecked: boolean): void {
    this.days.forEach(day => (day.selected = isChecked));
  }

  // Handle individual day selection change
  onDaySelectionChange(): void {
    // This method is used to trigger change detection and recompute state.
  }
}
