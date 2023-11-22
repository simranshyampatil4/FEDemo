import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InsuranceplanService } from '../services/insuranceplan.service';
import { lastValueFrom } from 'rxjs';
import { TemporaryDataService } from '../services/temporary-data.service';

@Component({
  selector: 'app-add-insurance-plan',
  templateUrl: './add-insurance-plan.component.html',
  styleUrl: './add-insurance-plan.component.css'
})
export class AddInsurancePlanComponent {
  insurancePlanForm!: FormGroup; // Note the non-null assertion operator here
  userRole:string=''
  constructor(
    private fb: FormBuilder,
    private insurancePlanService: InsuranceplanService,private temporaryData:TemporaryDataService
  ) {this.userRole=temporaryData.getRole()
    console.log(this.userRole)}
  ngOnInit(): void {
    this.insurancePlanForm = this.fb.group({
      planName: ['', Validators.required],
    });
  }

  async addInsurancePlan(): Promise<void> {
    try {
      const addedInsurancePlan = await lastValueFrom(this.insurancePlanService.addInsurancePlan(this.insurancePlanForm.value));
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
