import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { InsurancePlansComponent } from './insurance-plans/insurance-plans.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProtectionPlanComponent } from './protection-plan/protection-plan.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AddagentComponent } from './addagent/addagent.component';
import { JwtInterceptor } from './jwt.interceptor';
import { AgentListComponent } from './agent-list/agent-list.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ClaimComponent } from './claim/claim.component';
import { ClaimListComponent } from './claim-list/claim-list.component';
import { ClaimResolveComponent } from './claim-resolve/claim-resolve.component';
import { AgentComponent } from './agent/agent.component';
import { ViewPaymentsComponent } from './view-payments/view-payments.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddagentComponent,
    AboutComponent,
    LoginComponent,
    InsurancePlansComponent,
    ContactUsComponent,
    AddCustomerComponent,
    FooterComponent,
    RegisterComponent,
    ProtectionPlanComponent,
    WeatherInfoComponent,
    AgentListComponent,
    CustomerListComponent,
    ClaimComponent,
    ClaimListComponent,
    ClaimResolveComponent,
    AgentComponent,
    ViewPaymentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,useClass:JwtInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
