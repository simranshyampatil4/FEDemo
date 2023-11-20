// src/app/agent.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agent } from '../models/agent';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  private apiUrl = 'https://localhost:7029/api'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getAllAgents(): Observable<Agent[]> {
    return this.http.get<Agent[]>(`${this.apiUrl}/agent/get`);
  }

  getAgentById(agentId: number): Observable<Agent> {
    return this.http.get<Agent>(`${this.apiUrl}/agent/${agentId}`);
  }

  addAgent(agent: Agent): Observable<Agent> {
    return this.http.post<Agent>(`${this.apiUrl}/agent`, agent);
  }

  updateAgent(updatedAgent: Agent): Observable<Agent> {
    return this.http.put<Agent>(`${this.apiUrl}/agent/put`, updatedAgent);
  }

  deleteAgent(agentId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/agent/${agentId}`);
  }
}
