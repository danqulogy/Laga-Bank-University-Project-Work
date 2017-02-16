import { RouterModule, Routes } from "@angular/router";

import { AllTransactionsComponent } from "./components/all-transactions/all-transactions.component";
import { AuthGuard } from './auth.guard';
import { LoginComponent } from "./components/login/login.component";
import { ManageComponent } from "./components/manage/manage.component";
import { ModuleWithProviders } from "@angular/core";
import { RegistrationWizardBaseComponent } from "./components/registration-wizard/registration-wizard-base/registration-wizard-base.component";
import { RegistrationWizardComponent } from "./components/registration-wizard/registration-wizard.component";
import { Step1PersonalInfoComponent } from "./components/registration-wizard/steps/step1-personal-info/step1-personal-info.component";
import { Step2ContactInfoComponent } from "./components/registration-wizard/steps/step2-contact-info/step2-contact-info.component";
import { Step3EmployeeInfoComponent } from "./components/registration-wizard/steps/step3-employee-info/step3-employee-info.component";
import { Step4InstitutionalDetailsComponent } from "./components/registration-wizard/steps/step4-institutional-details/step4-institutional-details.component";
import { Step5FinancialDetailsComponent } from "./components/registration-wizard/steps/step5-financial-details/step5-financial-details.component";
import { Step6EProductsComponent } from "./components/registration-wizard/steps/step6-eproducts/step6-eproducts.component";
import { Step7RequiredDocumentsComponent } from "./components/registration-wizard/steps/step7-required-documents/step7-required-documents.component";

/**
 * Created by BERNARD on 2/5/2017.
 */


const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'all-transactions',
    component: AllTransactionsComponent
  },
  {
    path: 'registration-wizard',
    component: RegistrationWizardComponent,
    children: [
      {
        path: '',
        redirectTo: '/registration-wizard/step1',
        pathMatch: 'full'
      },
      {
        path: 'step1',
        component: Step1PersonalInfoComponent
      },
      {
        path: 'step2',
        component: Step2ContactInfoComponent
      },
      {
        path: 'step3',
        component: Step3EmployeeInfoComponent
      },
      {
        path: 'step4',
        component: Step4InstitutionalDetailsComponent
      },
      {
        path: 'step5',
        component: Step5FinancialDetailsComponent
      },
      {
        path: 'step6',
        component: Step6EProductsComponent
      },
      {
        path: 'step7',
        component: Step7RequiredDocumentsComponent
      }
    ]
  },
  {
    path: 'manage',
    component: ManageComponent
  }
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.
  forRoot(appRoutes);
