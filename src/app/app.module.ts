import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { FormElementComponent } from './admin/form-element/form-element.component';
import { TableElementComponent } from './admin/table-element/table-element.component';
import { SigninComponent } from './admin/signin/signin.component';
import { SignupComponent } from './admin/signup/signup.component';
import { ProfileComponent } from './admin/profile/profile.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DeleteModalComponent } from './admin/modal/delete-modal/delete-modal.component';
import { DashboardTwoComponent } from './admin/dashboard-two/dashboard-two.component';
import { EditModalComponent } from './admin/modal/edit-modal/edit-modal.component';
import { AnalyticsComponent } from './admin/analytics/analytics.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { StackCompareChartComponent } from './admin/shared/stack-compare-chart/stack-compare-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonSharedModule } from './common/common-shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { InventoryModule } from './inventory/inventory.module';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FormElementComponent,
    TableElementComponent,
    SigninComponent,
    SignupComponent,
    ProfileComponent,
    DeleteModalComponent,
    DashboardTwoComponent,
    EditModalComponent,
    AnalyticsComponent,
    StackCompareChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    CommonSharedModule,
    FormsModule,
    BrowserAnimationsModule,
    HighchartsChartModule,
    HttpClientModule,
    MatTabsModule,
    MatCheckboxModule,
    InventoryModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],

  exports: [
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
  ]

})
export class AppModule { }
