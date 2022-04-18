import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../../models';
import { LabService } from 'src/app/services/lab.service';

@Component({
  selector: 'app-vacancies-topten',
  templateUrl: './vacancies-topten.component.html',
  styleUrls: ['./vacancies-topten.component.css'],
})
export class VacanciesToptenComponent implements OnInit {
  vacancies: Vacancy[] = [];
  constructor(private service: LabService) {}

  ngOnInit(): void {
    this.getVacancies();
  }

  getVacancies() {
    this.service.getTopVacancies().subscribe((data) => {
      this.vacancies = data;
    });
  }
}
