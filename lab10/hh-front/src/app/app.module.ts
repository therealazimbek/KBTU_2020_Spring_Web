import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './AuthInterceptor';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { VacanciesComponent } from './components/vacancies/vacancies.component';
import { VacancyDetailComponent } from './components/vacancy-detail/vacancy-detail.component';
import { LoginComponent } from './components/login/login.component';
import { CompanyVacanciesComponent } from './components/company-vacancies/company-vacancies.component';
import { VacanciesToptenComponent } from './components/vacancies-topten/vacancies-topten.component';
import { FormsModule } from '@angular/forms';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { AddVacancyComponent } from './components/add-vacancy/add-vacancy.component';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    CompanyDetailComponent,
    VacanciesComponent,
    VacancyDetailComponent,
    LoginComponent,
    CompanyVacanciesComponent,
    VacanciesToptenComponent,
    NotfoundComponent,
    AddCompanyComponent,
    AddVacancyComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
