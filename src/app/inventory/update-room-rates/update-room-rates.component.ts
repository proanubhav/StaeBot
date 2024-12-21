import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-update-room-rates',
  templateUrl: './update-room-rates.component.html',
  styleUrls: ['./update-room-rates.component.scss']
})
export class UpdateRoomRatesComponent {
  startDate: string | null = null; // Holds the selected date
  tableHeaders: SafeHtml[] = [];    // Holds the dynamic headers
  
  rooms = [
    { name: 'Deluxe Room' },
    { name: 'Executive Room' },
    { name: 'Suite Room' },
    { name: 'Total Available Rooms' },
    { name: 'Occupancy Percentage' }
  ];
  constructor(private sanitizer: DomSanitizer) {}
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
      const weekday = newDate.toLocaleDateString('en-US', { weekday: 'short' });
      const date = newDate.toLocaleDateString('en-US', { day: '2-digit', month: 'short' });

      // Bypass security to allow rendering HTML safely
      return this.sanitizer.bypassSecurityTrustHtml(`${weekday}<br>${date}`);
    });
  }
}
