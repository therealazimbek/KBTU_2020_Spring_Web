export interface Company {
  id: number;
  name: string;
  description: string;
  city: string;
  address: string;
}

export interface Vacancy {
  id: number;
  name: string;
  description: string;
  salary: number;
  company: Company;
}

export interface VacancyAdd {
  id: number;
  name: string;
  description: string;
  salary: number;
  company_id: number;
}

export interface AuthToken {
  refresh: string;
  access: string;
}
