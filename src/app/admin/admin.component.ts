import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TemporaryDataService } from '../services/temporary-data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  constructor(private router: Router,private temporarydata:TemporaryDataService) { }

  ngOnInit(): void {
  }

  redirectTo(route: string): void {
    this.router.navigate([route]);
  }
  setRole(){
    console.log("hih")
    //debugger
    this.temporarydata.setRole('Admin')
    this.router.navigateByUrl("/add-customer")
    // console.log(this.temporarydata.getRole)
    
  }
}
