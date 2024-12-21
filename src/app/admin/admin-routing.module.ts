import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormElementComponent } from './form-element/form-element.component';
import { TableElementComponent } from './table-element/table-element.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardTwoComponent } from './dashboard-two/dashboard-two.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AuthGuard } from '../auth.guard';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard2',
    component: DashboardTwoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'form-element',
    component: FormElementComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'table-element',
    component: TableElementComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'analytics',
    component: AnalyticsComponent,
    canActivate: [AuthGuard]
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
