import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {
  newCustomer: Customer = {
    CustomerId: 0,
    FirstName: '',
    LastName: '',
    Email: '',
    MobileNo: '',
    State:'',
    City:'',
    Nominee:'',
    NomineeRelation:'',
    UserId: 0,
    AgentId:0,
    // IsActive: true, // Uncomment this line if needed
  };

  constructor(private customerService: CustomerService) {}

  async addCustomer(): Promise<void> {
    try {
      const addedCustomer = await lastValueFrom(this.customerService.addCustomer(this.newCustomer));
      console.log('Customer added:', addedCustomer);

      // Display an alert to the user
      alert('Customer added successfully!');

      // Optionally, you can reset the form or perform any other actions here
    } catch (error) {
      console.error('Error adding customer:', error);

      // Display an error alert to the user
      alert('Error adding customer. Please try again.');
    }
  }
}
