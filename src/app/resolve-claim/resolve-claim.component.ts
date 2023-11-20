import { Component, OnInit } from '@angular/core';
import { ClaimService } from '../services/claim.service';
import { Claim } from '../models/claim';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-resolve-claim',
  templateUrl: './resolve-claim.component.html',
  styleUrls: ['./resolve-claim.component.css']
})
export class ResolveClaimComponent implements OnInit {
  allClaims: Claim[] = [];
  filteredClaims: Claim[] = [];
  activeTab: 'all' | 'resolved' | 'pending' = 'all';

  constructor(private claimService: ClaimService) {}

  ngOnInit(): void {
    this.fetchClaims();
  }

  // private fetchClaims(): void {
  //   this.claimService.getAllClaims().subscribe(
  //     (data: Claim[]) => {
  //       this.allClaims = data;
  //       this.filterClaims();
  //     },
  //     error => {
  //       console.error('Error fetching claims:', error);
  //     }
  //   );
  // }
  private fetchClaims(): void {
    this.claimService.getAllClaims().pipe(
      tap((data: Claim[]) => {
        this.allClaims = data;
        this.filterClaims();
      })
    ).subscribe({
      next: () => {},
      error: (error) => {
        console.error('Error fetching claims:', error);
      }
    });
  }
  

  tabChanged(tab: 'all' | 'resolved' | 'pending'): void {
    this.activeTab = tab;
    this.filterClaims();
  }

  private filterClaims(): void {
    switch (this.activeTab) {
      case 'all':
        this.filteredClaims = this.allClaims;
        break;
      case 'resolved':
        this.filteredClaims = this.allClaims.filter((claim: Claim) => claim.Status === 'Resolved');
        break;
      case 'pending':
        this.filteredClaims = this.allClaims.filter((claim: Claim) => claim.Status === 'Pending');
        break;
    }
  }


  updateClaimStatus(claimToBeUpdated: Claim): void {
    claimToBeUpdated.IsActive = true;
    this.claimService.updateClaimStatus( claimToBeUpdated).pipe(
      switchMap(() => this.claimService.getAllClaims())
    ).subscribe({
      next: (data: Claim[]) => {
        this.allClaims = data;
        this.filterClaims();
      },
      error: (error) => {
        console.error('Error updating claim status:', error);
      }
    });
  }

  
}
