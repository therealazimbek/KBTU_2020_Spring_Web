import { Component, OnInit } from '@angular/core';
import { Vacancy, Company } from '../../models';
import { LabService } from 'src/app/services/lab.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css'],
})
export class CompanyDetailComponent implements OnInit {
  company: Company | undefined;
  vacancies: Vacancy[] | undefined;
  edit: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private service: LabService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCompany();
  }

  getCompany() {
    const routeParams = this.route.snapshot.paramMap;
    const companyID = Number(routeParams.get('companyID'));

    this.service.getCompany(companyID).subscribe((company) => {
      this.company = company;
    });

    this.service.getCompanyVacancies(companyID).subscribe((data) => {
      this.vacancies = data;
    });
  }

  editable() {
    this.edit = !this.edit;
  }

  updateCompany() {
    if (this.company) {
      this.service.updateCompany(this.company).subscribe((res) => {
        console.log(res);
        this.editable();
      });
    } else {
      alert('Something wrong happened!');
    }
  }

  deleteCompany() {
    if (this.company) {
      this.service.deleteCompany(this.company).subscribe((res) => {
        alert('Deleted!');
        this.router.navigateByUrl('companies');
      });
    } else {
      alert('Something wrong happened!');
    }
  }
}
