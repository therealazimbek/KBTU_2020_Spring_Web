import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacancy, AuthToken, Company, VacancyAdd } from '../models';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root',
})
export class LabService {
  BASE_URl = 'http://localhost:8000';

  private messageSource = new BehaviorSubject('hi');
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    setInterval(() => {
      if (localStorage.getItem('token') !== null) {
        console.log('Checking status!');
        this.refreshLoginStatus();
      }
    }, 5000);
  }

  refreshLoginStatus() {
    let token = localStorage.getItem('token');
    if (token && this.isExpiredToken(token)) {
      this.messageSource.next('login');
    }
  }

  login(username: string, password: string): Observable<AuthToken> {
    return this.http.post<AuthToken>(`${this.BASE_URl}/api/login/`, {
      username,
      password,
      observe: 'response',
    });
  }

  isExpiredToken(token: string | null): boolean {
    if (!token) {
      token = localStorage.getItem('token');
    }
    if (!token) {
      return true;
    }

    const date = helper.getTokenExpirationDate(token);

    if (date === undefined) return false;
    if (date) {
      return !(date.valueOf() > new Date().valueOf());
    }
    return true;
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.BASE_URl}/api/companies/`);
  }

  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.BASE_URl}/api/companies/${id}`);
  }

  getCompanyVacancies(id: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(
      `${this.BASE_URl}/api/companies/${id}/vacancies/`
    );
  }

  addCompany(data: any): Observable<Company[]> {
    return this.http.post<Company[]>(`${this.BASE_URl}/api/companies/`, data);
  }

  updateCompany(company: Company): Observable<Company> {
    return this.http.put<Company>(
      `${this.BASE_URl}/api/companies/${company.id}/`,
      company
    );
  }

  deleteCompany(company: Company): Observable<any> {
    return this.http.delete(`${this.BASE_URl}/api/companies/${company.id}/`);
  }

  getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.BASE_URl}/api/vacancies/`);
  }

  getTopVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.BASE_URl}/api/vacancies/top_ten`);
  }

  addVacancy(data: any): Observable<Vacancy[]> {
    return this.http.post<Vacancy[]>(`${this.BASE_URl}/api/vacancies/`, data);
  }

  getVacancy(id: number): Observable<Vacancy> {
    return this.http.get<Vacancy>(`${this.BASE_URl}/api/vacancies/${id}`);
  }

  updateVacancy(vacancy: VacancyAdd): Observable<Vacancy> {
    return this.http.put<Vacancy>(
      `${this.BASE_URl}/api/vacancies/${vacancy.id}/`,
      vacancy
    );
  }

  deleteVacancy(vacancy: VacancyAdd): Observable<any> {
    return this.http.delete(`${this.BASE_URl}/api/vacancies/${vacancy.id}/`);
  }
}
