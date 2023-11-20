import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {
  customers: any;

  constructor(private customerService: CustomerService, private router: Router) {}

  ngOnInit(): void {
    this.fetchCustomers();
  }

  fetchCustomers(): void {
    this.customerService.getAllCustomers().subscribe(
      {
        next:(data)=>{
        this.customers=data
        console.log(this.customers)
      },
      error:(errorResponse:HttpErrorResponse)=>{
        console.log(errorResponse); 
      }
    }
    );
  }

  editCustomer(customerId: number): void {
    // Navigate to the update agent page with the agent ID
    this.router.navigate(['/update-customer', customerId]);
  }

  deleteCustomer(customerId: number): void {
    // Implement the logic to delete the agent using the agent service
    // For example:
    this.customerService.deleteCustomer(customerId).subscribe(
      () => {
        // Update the agents list after successful deletion
        this.fetchCustomers();
      },
      error => {
        console.error('Error deleting agent:', error);
      }
    );
  }
}
