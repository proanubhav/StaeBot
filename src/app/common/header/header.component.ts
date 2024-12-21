import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from '../../admin/modal/delete-modal/delete-modal.component';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '600px',
    });
  }
  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
    this.router.navigate(['/']);
  }
}
