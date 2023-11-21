import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimService } from '../services/claim.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-claim-list',
  templateUrl: './claim-list.component.html',
  styleUrl: './claim-list.component.css'
})
export class ClaimListComponent {
  claims: any;

  constructor(private claimService: ClaimService, private router: Router) {}

  ngOnInit(): void {
    this.fetchClaims();
  }

  fetchClaims(): void {
    this.claimService.getAllClaims().subscribe(
      {
        next:(data)=>{
        this.claims=data
        console.log(this.claims)
      },
      error:(errorResponse:HttpErrorResponse)=>{
        console.log(errorResponse); 
      }
    }
    );
  }

  editClaim(): void {
    // Navigate to the update agent page with the agent ID
    this.router.navigate(['/claim-resolve']);
  }

  deleteClaim(claimId: number): void {
    // Implement the logic to delete the agent using the agent service
    // For example:
    this.claimService.deleteClaim(claimId).subscribe(
      () => {
        // Update the agents list after successful deletion
        this.fetchClaims();
      },
      error => {
        console.error('Error deleting agent:', error);
      }
    );
  }
}
