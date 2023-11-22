import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  employeeForm!: FormGroup; // Note the non-null assertion operator here

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService
  ) {}
  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      salary: [0, Validators.required],
      userId: [0, Validators.required],
    });
  }

  async addEmployee(): Promise<void> {
    try {
      const addedEmployee = await lastValueFrom(this.employeeService.addEmployee(this.employeeForm.value));
      console.log('Employee added:', addedEmployee);

      // Display an alert to the user
      alert('Employee added successfully!');

      // Optionally, you can reset the form or perform any other actions here
      this.employeeForm.reset();
    } catch (error) {
      console.error('Error adding employee:', error);

      // Display an error alert to the user
      alert('Error adding employee. Please try again.');
    }
  }
}
