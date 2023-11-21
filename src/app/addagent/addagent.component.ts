// src/app/add-agent/add-agent.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgentService } from '../services/agent.service';
import { Agent } from '../models/agent';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-addagent',
  templateUrl: './addagent.component.html',
  styleUrls: ['./addagent.component.css']
})
export class AddagentComponent implements OnInit {
  agentForm!: FormGroup;

  constructor(private fb: FormBuilder, private agentService: AgentService) {}

  ngOnInit(): void {
    this.agentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      qualification: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', Validators.required],
      userId: [0, Validators.required],
      commissionEarned: [0, Validators.required],
      // isActive: [true], // Uncomment this line if needed
    });
  }

  async addAgent(): Promise<void> {
    try {
      const addedAgent = await lastValueFrom(this.agentService.addAgent(this.agentForm.value));
      console.log('Agent added:', addedAgent);

      // Display an alert to the user
      alert('Agent added successfully!');

      // Optionally, you can reset the form or perform any other actions here
      this.agentForm.reset();
    } catch (error) {
      console.error('Error adding agent:', error);

      // Display an error alert to the user
      alert('Error adding agent. Please try again.');
    }
  }
}
