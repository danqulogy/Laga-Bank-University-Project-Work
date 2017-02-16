import { RouterModule, Routes } from "@angular/router";
import { appRoutingProviders, routing } from "./app.routing";

import { AllTransactionsComponent } from './components/all-transactions/all-transactions.component';
import { AppComponent } from './components/app/app.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from "./components/login/login.component";
import { ManageComponent } from "./components/manage/manage.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NgModule } from '@angular/core';
import { RegisterWizardGuard } from "./register-wizard.guard";
import { RegistrationWizardBaseComponent } from './components/registration-wizard/registration-wizard-base/registration-wizard-base.component';
import { RegistrationWizardComponent } from './components/registration-wizard/registration-wizard.component';
import { Step1PersonalInfoComponent } from './components/registration-wizard/steps/step1-personal-info/step1-personal-info.component';
import { Step2ContactInfoComponent } from './components/registration-wizard/steps/step2-contact-info/step2-contact-info.component';
import { Step3EmployeeInfoComponent } from './components/registration-wizard/steps/step3-employee-info/step3-employee-info.component';
import { Step4InstitutionalDetailsComponent } from './components/registration-wizard/steps/step4-institutional-details/step4-institutional-details.component';
import { Step5FinancialDetailsComponent } from './components/registration-wizard/steps/step5-financial-details/step5-financial-details.component';
import { Step6EProductsComponent } from './components/registration-wizard/steps/step6-eproducts/step6-eproducts.component';
import { Step7RequiredDocumentsComponent } from './components/registration-wizard/steps/step7-required-documents/step7-required-documents.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WorkspaceComponent,
    AppComponent,
    LoginComponent,
    FooterComponent,
    RegistrationWizardComponent,
    ManageComponent,
    AllTransactionsComponent,
    Step1PersonalInfoComponent,
    Step2ContactInfoComponent,
    Step3EmployeeInfoComponent,
    Step4InstitutionalDetailsComponent,
    Step5FinancialDetailsComponent,
    Step6EProductsComponent,
    Step7RequiredDocumentsComponent,
    RegistrationWizardBaseComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders, AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
