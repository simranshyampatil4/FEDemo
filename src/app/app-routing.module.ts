import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { InsurancePlansComponent } from './insurance-plans/insurance-plans.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterComponent } from './register/register.component';
import { ProtectionPlanComponent } from './protection-plan/protection-plan.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { AddagentComponent } from './addagent/addagent.component';
import { EmployeeComponent } from './employee/employee.component';
// import { ResolveClaimComponent } from './resolve-claim/resolve-claim.component';
import { DocumentverificationComponent } from './documentverification/documentverification.component';
import { UpdateDocumentComponent } from './update-document/update-document.component';
import { AgentListComponent } from './agent-list/agent-list.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ClaimComponent } from './claim/claim.component';
import { ClaimListComponent } from './claim-list/claim-list.component';
import { ClaimResolveComponent } from './claim-resolve/claim-resolve.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'insurance-plans', component: InsurancePlansComponent },
  { path: 'insurance-plans/protection-plan', component: ProtectionPlanComponent },
  { path: 'contact-us', component: ContactUsComponent },
  {path: 'add-agent', component: AddagentComponent},
  {path: 'employee', component: EmployeeComponent},
  // {path: 'claims', component: ResolveClaimComponent},
  {path: 'document-verification', component: DocumentverificationComponent },
  { path: 'update-document/:id', component: UpdateDocumentComponent },
  { path: 'agent-list', component: AgentListComponent },
  {path: 'add-customer', component: AddCustomerComponent},
  { path: 'customer-list', component: CustomerListComponent },
  {path:'claim',component:ClaimComponent},
  {path:'claim-list',component:ClaimListComponent},
  {path:'claim-resolve',component:ClaimResolveComponent},

  
  {
    path:"weather",
    component:WeatherInfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
