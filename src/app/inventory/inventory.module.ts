import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { InventoryRoutingModule } from './inventory-routing.module';
import { UpdateInventoryComponent } from './update-inventory/update-inventory.component';
import { UpdateRoomRatesComponent } from './update-room-rates/update-room-rates.component';
import { AllBookingComponent } from './all-booking/all-booking.component';
import { BulkUpdateInventoryComponent } from './bulk-update-inventory/bulk-update-inventory.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CommonSharedModule } from '../common/common-shared.module';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { OtaCommissionComponent } from './ota-commission/ota-commission.component';
import { UpdateRoomsComponent } from './update-rooms/update-rooms.component';


@NgModule({
  declarations: [
    UpdateInventoryComponent,
    UpdateRoomRatesComponent,
    AllBookingComponent,
    BulkUpdateInventoryComponent,
    OtaCommissionComponent,
    UpdateRoomsComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonSharedModule,
    FormsModule,
    MatTabsModule,
    MatCheckboxModule
  ]
})
export class InventoryModule { }
