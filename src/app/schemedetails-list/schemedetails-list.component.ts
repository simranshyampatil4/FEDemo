import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShemedetailsService } from '../services/shemedetails.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-schemedetails-list',
  templateUrl: './schemedetails-list.component.html',
  styleUrl: './schemedetails-list.component.css'
})
export class SchemedetailsListComponent {
  details: any;

  constructor(private schemeDetailsService: ShemedetailsService, private router: Router) {}

  ngOnInit(): void {
    this.fetchSchemeDetails();
  }

  fetchSchemeDetails(): void {
    this.schemeDetailsService.getAllSchemeDetails().subscribe(
      {
        next:(data)=>{
        this.details=data
        console.log(this.details)
      },
      error:(errorResponse:HttpErrorResponse)=>{
        console.log(errorResponse); 
      }
    }
    );
  }

  editSchemeDetails(detailsId: number): void {
    // Navigate to the update agent page with the agent ID
    this.router.navigate(['/update-schemedetails-list', detailsId]);
  }

  deleteSchemeDetails(detailsId: number): void {
    // Implement the logic to delete the agent using the agent service
    // For example:
    this.schemeDetailsService.deleteSchemeDetails(detailsId).subscribe(
      () => {
        // Update the agents list after successful deletion
        this.fetchSchemeDetails();
      },
      error => {
        console.error('Error deleting agent:', error);
      }
    );
  }
}
