import { Component } from '@angular/core';
import { AgentService } from '../services/agent.service';
import { Agent } from '../models/agent';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-addagent',
  templateUrl: './addagent.component.html',
  styleUrls: ['./addagent.component.css']
})
export class AddagentComponent {
  newAgent: Agent = {
    AgentId: 0,
    FirstName: '',
    LastName: '',
    Qualification: '',
    Email: '',
    MobileNo: '',
    UserId: 0,
    CommissionEarned: 0,
    // IsActive: true, // Uncomment this line if needed
  };

  constructor(private agentService: AgentService) {}

  async addAgent(): Promise<void> {
    try {
      const addedAgent = await lastValueFrom(this.agentService.addAgent(this.newAgent));
      console.log('Agent added:', addedAgent);

      // Display an alert to the user
      alert('Agent added successfully!');

      // Optionally, you can reset the form or perform any other actions here
    } catch (error) {
      console.error('Error adding agent:', error);

      // Display an error alert to the user
      alert('Error adding agent. Please try again.');
    }
  }
}