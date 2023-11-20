// update-agent.component.ts

import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AgentService } from '../services/agent.service';
import { Agent } from '../models/agent';

@Component({
  selector: 'app-update-agent',
  templateUrl: './update-agent.component.html',
  styleUrls: ['./update-agent.component.css']
})
export class UpdateAgentComponent {
  updateAgentForm = new FormGroup({
    agentId: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    qualification: new FormControl(''),
    email: new FormControl(''),
    mobileNo: new FormControl(''),
    commissionEarned: new FormControl('')
  });

  agentData: any;

  constructor(private agentService: AgentService) {
    this.fetchAgents();
  }

  fetchAgents(): void {
    this.agentService.getAllAgents().subscribe(
      {
        next:(data)=>{
        this.agentData=data
        console.log(this.agentData)
      },
      error:(errorResponse:HttpErrorResponse)=>{
        console.log(errorResponse); 
      }
    }
      // (data: Agent[]) => {
      //   this.agentData = data;
      // },
      // error => {
      //   console.error('Error fetching agents:', error);
      // }
    );
  }

  getSelectedValue(event: any): void {
    const selectedAgentId = +event.target.value;
    if (selectedAgentId) {
      this.agentService.getAgentById(selectedAgentId).subscribe(
        (data: Agent) => {
          this.updateAgentForm.patchValue(this.agentData);
        },
        error => {
          console.error('Error fetching agent details:', error);
        }
      );
    }
  }

  updateAgentData(agentData:any){
    this.agentService.updateAgent(agentData).subscribe({
      next: (result) => {
        alert("Agent updated successfully");
        console.log(result)
      },
      error: (errorResponse: HttpErrorResponse) => {
        console.log(errorResponse)
      }
    })
    console.log(agentData)
    // const agentId = this.updateAgentForm.value.agentId;
    // const updatedAgentData = this.updateAgentForm.value;

    // this.agentService.updateAgent(agentId, updatedAgentData).subscribe({
    //   next: (result) => {
    //     alert("Agent updated successfully");
    //     console.log(result);
    //   },
    //   error: (errorResponse: HttpErrorResponse) => {
    //     console.log(errorResponse);
    //   }
    // });
  }

  deleteAgent(agentId: number): void {
    this.agentService.deleteAgent(agentId).subscribe({
      next: (result) => {
        alert("Agent deleted successfully");
        console.log(result);
        // You might want to fetch agents again after deletion
        this.fetchAgents();
      },
      error: (errorResponse: HttpErrorResponse) => {
        console.log(errorResponse);
      }
    });
  }
}
