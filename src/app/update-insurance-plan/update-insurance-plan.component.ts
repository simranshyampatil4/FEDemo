import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { lastValueFrom } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InsuranceplanService } from '../services/insuranceplan.service';

@Component({
  selector: 'app-update-insurance-plan',
  templateUrl: './update-insurance-plan.component.html',
  styleUrl: './update-insurance-plan.component.css'
})
export class UpdateInsurancePlanComponent {
  insurancePlanForm!: FormGroup; // Note the non-null assertion operator here
  planId:number=0
  constructor(
    private fb: FormBuilder,
    private insurancePlanService: InsuranceplanService
  ) {
    this.planId=insurancePlanService.getId()
  }
  ngOnInit(): void {
    this.insurancePlanForm = this.fb.group({
      planId:['', Validators.required],
      planName: ['', Validators.required],
    });
  }

  async addInsurancePlan(): Promise<void> {
    try {
      const addedInsurancePlan = await lastValueFrom(this.insurancePlanService.updateInsurancePlan(this.insurancePlanForm.value));
      console.log('Insurance Plan added:', addedInsurancePlan);

      // Display an alert to the user
      alert('Insurance Plan added successfully!');

      // Optionally, you can reset the form or perform any other actions here
      this.insurancePlanForm.reset();
    } catch (error) {
      console.error('Insurance Plan adding employee:', error);

      // Display an error alert to the user
      alert('Error adding Insurance Plan. Please try again.');
    }
  }

}
