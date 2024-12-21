import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from '../modal/delete-modal/delete-modal.component';

@Component({
  selector: 'app-dashboard-two',
  templateUrl: './dashboard-two.component.html',
  styleUrls: ['./dashboard-two.component.scss']
})
export class DashboardTwoComponent {
  constructor(public dialog: MatDialog) { }

  // @ViewChild("editData", { }) editData: TemplateRef<any>;
  ngOnInit(): void {
  }

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '600px',
    });
  }
  
  openEditDialog(): void {
    // this.dialog.open(this.editData, {
    //  width: '278px',
    //  panelClass: 'editDialog',
    // });
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
