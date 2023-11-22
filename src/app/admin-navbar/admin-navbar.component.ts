import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TemporaryDataService } from '../services/temporary-data.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.css'
})
export class AdminNavbarComponent {
  constructor(private router:Router,private temporarydata:TemporaryDataService){
  }
  setRole(){
    console.log("hih")
    debugger
    this.temporarydata.setRole('Admin')
    // console.log(this.temporarydata.getRole)
    
  }
}
