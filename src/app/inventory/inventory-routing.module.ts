import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BulkUpdateInventoryComponent } from './bulk-update-inventory/bulk-update-inventory.component';
import { AuthGuard } from '../auth.guard';
import { UpdateRoomRatesComponent } from './update-room-rates/update-room-rates.component';
import { AllBookingComponent } from './all-booking/all-booking.component';
import { UpdateInventoryComponent } from './update-inventory/update-inventory.component';
import { OtaCommissionComponent } from './ota-commission/ota-commission.component';
import { UpdateRoomsComponent } from './update-rooms/update-rooms.component';

const routes: Routes = [
    {
      path: 'bulk-update-inventory',
      component: BulkUpdateInventoryComponent,
      canActivate: [AuthGuard]  
    },
    {
      path: 'update-room-rates',
      component: UpdateRoomRatesComponent,
      canActivate: [AuthGuard]  
    },
    {
      path: 'update-rooms',
      component: UpdateRoomsComponent,
      canActivate: [AuthGuard]  
    },
    {
      path: 'all-bookings',
      component: AllBookingComponent,
      canActivate: [AuthGuard]  
    },
    {
      path: 'update-inventory',
      component: UpdateInventoryComponent,
      canActivate: [AuthGuard]  
    },
    {
      path: 'ota-commission',
      component: OtaCommissionComponent,
      canActivate: [AuthGuard]  
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
