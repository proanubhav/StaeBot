import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sideFlag: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  sideDropdown() {
    this.sideFlag = !this.sideFlag;
  }

  openAllLeads() {
    this.router.navigate(['lead/lead-list']);
  }

  bulkUpdateInventory() {
    this.router.navigate(['inventory/bulk-update-inventory']);
  }
  updateRoomRate() {
    this.router.navigate(['inventory/update-room-rates']);
  }
  updateRooms() {
    this.router.navigate(['inventory/update-rooms']);
  }
  allBookings() {
    this.router.navigate(['inventory/all-bookings']);
  }
  updateInventory() {
    this.router.navigate(['inventory/update-inventory']);
  }

  openMyLeads() {
    this.router.navigate(['lead/my-leads']);
  }

  openContact() {
    this.router.navigate(['lead/contact']);
  }

}
