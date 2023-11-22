import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsurancePlan } from '../models/insurancePlan';

@Injectable({
  providedIn: 'root'
})
export class InsuranceplanService {
  private apiUrl = 'https://localhost:7029/api'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getAllInsurancePlan(): Observable<InsurancePlan[]> {
    return this.http.get<InsurancePlan[]>(`${this.apiUrl}/InsurancePlan`);
  }

  getInsurancePlanById(planId: number): Observable<InsurancePlan> {
    return this.http.get<InsurancePlan>(`${this.apiUrl}/InsurancePlan/${planId}`);
  }

  addInsurancePlan(insurancePlan: InsurancePlan): Observable<InsurancePlan> {
    return this.http.post<InsurancePlan>(`${this.apiUrl}/InsurancePlan`, insurancePlan);
  }

  updateInsurancePlan(updatedInsurancePlan: InsurancePlan): Observable<InsurancePlan> {
    return this.http.put<InsurancePlan>(`${this.apiUrl}/InsurancePlan`, updatedInsurancePlan);
  }

  deleteInsurancePlan(planId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/InsurancePlan/${planId}`);
  }
}
