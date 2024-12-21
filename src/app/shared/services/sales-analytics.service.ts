import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SalesData {
  categories: string[];
  series: { name: string; data: number[]; stack: string }[];
}

export interface AllSalesData {
  day: SalesData;
  week: SalesData;
  month: SalesData;
  quarter: SalesData;
  year: SalesData;
}

@Injectable({
  providedIn: 'root'
})
export class SalesDataService {
  private apiUrl = 'YOUR_API_URL'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  fetchSalesData(): Observable<AllSalesData> {
    return this.http.get<AllSalesData>(this.apiUrl);
  }
}
