import { Component, OnInit } from '@angular/core';
import { Vacancy, Company, VacancyAdd } from '../../models';
import { LabService } from 'src/app/services/lab.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vacancy-detail',
  templateUrl: './vacancy-detail.component.html',
  styleUrls: ['./vacancy-detail.component.css'],
})
export class VacancyDetailComponent implements OnInit {
  vacancy: Vacancy | undefined;
  edit: boolean = false;
  vacancy_add: VacancyAdd | undefined;
  constructor(
    private route: ActivatedRoute,
    private service: LabService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getVacancy();
  }

  editable() {
    this.edit = !this.edit;
  }

  getVacancy() {
    const routeParams = this.route.snapshot.paramMap;
    const vacancyID = Number(routeParams.get('vacancyID'));

    this.service.getVacancy(vacancyID).subscribe((vacancy) => {
      this.vacancy = vacancy;
      this.vacancy_add = {
        id: this.vacancy.id,
        name: this.vacancy.name,
        salary: this.vacancy.salary,
        description: this.vacancy.description,
        company_id: this.vacancy.company.id,
      };
    });
  }

  updateVacancy() {
    if (this.vacancy_add) {
      this.service.updateVacancy(this.vacancy_add).subscribe((res) => {
        console.log(res);
        this.editable();
        location.reload();
      });
    } else {
      alert('Something wrong happened!');
    }
  }

  deleteVacancy() {
    if (this.vacancy_add) {
      this.service.deleteVacancy(this.vacancy_add).subscribe((res) => {
        alert('Deleted!');
        this.router.navigateByUrl('vacancies');
      });
    } else {
      alert('Something wrong happened!');
    }
  }
}
