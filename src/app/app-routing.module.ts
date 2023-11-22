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
import { AgentComponent } from './agent/agent.component';
import { AddInsurancePolicyComponent } from './add-insurance-policy/add-insurance-policy.component';
import { ViewPaymentsComponent } from './view-payments/view-payments.component';
import { SchemedetailsListComponent } from './schemedetails-list/schemedetails-list.component';
import { InsurancePolicyListComponent } from './insurance-policy-list/insurance-policy-list.component';
import { AdminComponent } from './admin/admin.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddInsurancePlanComponent } from './add-insurance-plan/add-insurance-plan.component';
import { InsurancePlanListComponent } from './insurance-plan-list/insurance-plan-list.component';
import { UpdateInsurancePlanComponent } from './update-insurance-plan/update-insurance-plan.component';
import { AddInsuranceSchemeComponent } from './add-insurance-scheme/add-insurance-scheme.component';
import { InsuranceSchemeListComponent } from './insurance-scheme-list/insurance-scheme-list.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerNavbarComponent } from './customer-navbar/customer-navbar.component';
import { AgentNavbarComponent } from './agent-navbar/agent-navbar.component';
import { AgentLoginComponent } from './agent-login/agent-login.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';



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
  {path:'agent',component:AgentComponent},
  {path:'view-payments',component:ViewPaymentsComponent},
  {path:'schemedetails-list',component:SchemedetailsListComponent},
  {path:'add-insurance-policy',component:AddInsurancePolicyComponent},
  {path:'insurance-policy-list',component:InsurancePolicyListComponent},
  {path:'admin',component:AdminComponent},
  {path:'add-employee',component:AddEmployeeComponent},
  {path:'employee-list',component:EmployeeListComponent},
  {path:'add-insurance-plan',component:AddInsurancePlanComponent},
  {path:'insurance-plan-list',component:InsurancePlanListComponent},
  {path:'update-insurance-plan',component:UpdateInsurancePlanComponent},
  {path:'add-insurance-scheme',component:AddInsuranceSchemeComponent},
  {path:'insurance-scheme-list',component:InsuranceSchemeListComponent},
  {path:'customer',component:CustomerComponent},
  {path:'customer-navbar',component:CustomerNavbarComponent},
  {path:'agent-navbar',component:AgentNavbarComponent},
  {path:'agent-login',component:AgentLoginComponent},
  {path:'admin-navbar',component:AdminNavbarComponent}, 
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
