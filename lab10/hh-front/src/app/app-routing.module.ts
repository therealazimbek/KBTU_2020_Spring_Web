import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

import { CompaniesComponent } from './components/companies/companies.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { CompanyVacanciesComponent } from './components/company-vacancies/company-vacancies.component';
import { VacanciesComponent } from './components/vacancies/vacancies.component';
import { VacancyDetailComponent } from './components/vacancy-detail/vacancy-detail.component';
import { VacanciesToptenComponent } from './components/vacancies-topten/vacancies-topten.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { AddVacancyComponent } from './components/add-vacancy/add-vacancy.component';

const routes: Routes = [
  {
    path: 'companies',
    component: CompaniesComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'companies/:companyID',
    component: CompanyDetailComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'addCompany',
    component: AddCompanyComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'vacancies',
    component: VacanciesComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'vacancies/:vacancyID',
    component: VacancyDetailComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'addVacancy',
    component: AddVacancyComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'topVacancies',
    component: VacanciesToptenComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
