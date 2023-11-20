// src/app/claim.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Claim } from '../models/claim';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {
  private apiUrl = 'localhost:yourport/api';
 
  constructor(private http: HttpClient) {}


   token = localStorage.getItem('token');

     headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

     options = { headers: this.headers };


  getAllClaims(): Observable<Claim[]> {
    return this.http.get<Claim[]>(`${this.apiUrl}/claim`, this.options);
  }
  // updateClaim(claimId: number, updatedClaim: Partial<Claim>): Observable<Claim | null> {
  //   const index = this.allClaims.findIndex(claim => claim.ClaimId === claimId);
  //   if (index !== -1) {
  //     this.allClaims[index] = { ...this.allClaims[index], ...updatedClaim };
  //     return of(this.allClaims[index]);
  //   }
  //   return of(null); // Return null when the claim is not found
  // }

  updateClaimStatus( updatedClaim: Claim): Observable<any> {
    
    return this.http.put(`${this.apiUrl}/claim`, updatedClaim, this.options);
  }
}
