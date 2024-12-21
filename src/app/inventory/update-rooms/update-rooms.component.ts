import { Component } from '@angular/core';

@Component({
  selector: 'app-update-rooms',
  templateUrl: './update-rooms.component.html',
  styleUrls: ['./update-rooms.component.scss']
})
export class UpdateRoomsComponent {
  startDate: string | null = null; // Holds the selected date
  tableHeaders: string[] = [];    // Holds the dynamic headers
  rooms = [
    { name: 'Deluxe Room' },
    { name: 'Executive Room' },
    { name: 'Suite Room' },
    { name: 'Total Available Rooms' },
    { name: 'Occupancy Percentage' }
  ];
  ngOnInit() {
    // Initialize with the current date
    const currentDate = new Date();
    this.startDate = currentDate.toISOString().split('T')[0]; // Set date in 'YYYY-MM-DD' format
    this.updateHeaders(); // Initialize headers based on the current date
  }
  updateHeaders() {
    if (!this.startDate) return;

    const selectedDate = new Date(this.startDate);
    this.tableHeaders = Array.from({ length: 10 }, (_, index) => {
      const newDate = new Date(selectedDate);
      newDate.setDate(selectedDate.getDate() + index);
      return newDate.toLocaleDateString('en-US', { day: '2-digit', month: 'short' });
    });
  }
}
