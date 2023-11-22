import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceSchemeService } from '../services/insurance-scheme.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-add-insurance-scheme',
  templateUrl: './add-insurance-scheme.component.html',
  styleUrl: './add-insurance-scheme.component.css'
})
export class AddInsuranceSchemeComponent {
  insuranceSchemeForm!: FormGroup; // Note the non-null assertion operator here

  constructor(
    private fb: FormBuilder,
    private insuranceSchemeService: InsuranceSchemeService
  ) {}
  ngOnInit(): void {
    this.insuranceSchemeForm = this.fb.group({
      schemeName: ['', Validators.required],
      detailId: [0, Validators.required],
      planId: [0, Validators.required],
    });
  }

  async addInsuranceScheme(): Promise<void> {
    try {
      const addedInsuranceScheme = await lastValueFrom(this.insuranceSchemeService.addInsuranceScheme(this.insuranceSchemeForm.value));
      console.log('Insurance Scheme added:', addedInsuranceScheme);

      // Display an alert to the user
      alert('Insurance Scheme added successfully!');

      // Optionally, you can reset the form or perform any other actions here
      this.insuranceSchemeForm.reset();
    } catch (error) {
      console.error('Error adding InsuranceScheme:', error);

      // Display an error alert to the user
      alert('Error adding InsuranceScheme. Please try again.');
    }
  }
}
