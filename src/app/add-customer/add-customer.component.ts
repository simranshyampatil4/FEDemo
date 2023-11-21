// src/app/add-agent/add-agent.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customerForm!: FormGroup; // Note the non-null assertion operator here

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      nominee: ['', Validators.required],
      nomineeRelation: ['', Validators.required],
      userId: [0, Validators.required],
      agentId: [0, Validators.required],
    });
  }

  async addCustomer(): Promise<void> {
    try {
      const addedCustomer = await lastValueFrom(this.customerService.addCustomer(this.customerForm.value));
      console.log('Customer added:', addedCustomer);

      // Display an alert to the user
      alert('Customer added successfully!');

      // Optionally, you can reset the form or perform any other actions here
      this.customerForm.reset();
    } catch (error) {
      console.error('Error adding customer:', error);

      // Display an error alert to the user
      alert('Error adding customer. Please try again.');
    }
  }
}