import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from '../modal/delete-modal/delete-modal.component';
import { EditModalComponent } from '../modal/edit-modal/edit-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  // @ViewChild("editData", { }) editData: TemplateRef<any>;
  ngOnInit(): void {
  }

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '600px',
    });
  }
  
  openEditDataDialog(): void {

    const dialogRef = this.dialog.open(EditModalComponent, {
      width: '600px',
    });

    // this.dialog.open(this.editData, {
    //  width: '278px',
    //  panelClass: 'editDialog',
    // });
  }

  closeDialog() {
    this.dialog.closeAll();
  }

}
