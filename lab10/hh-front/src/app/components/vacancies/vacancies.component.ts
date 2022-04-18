import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../../models';
import { LabService } from 'src/app/services/lab.service';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css'],
})
export class VacanciesComponent implements OnInit {
  vacancies: Vacancy[] = [];
  constructor(private service: LabService) {}

  ngOnInit(): void {
    this.getVacancies();
  }

  getVacancies() {
    this.service.getVacancies().subscribe((data) => {
      this.vacancies = data;
    });
  }
}
