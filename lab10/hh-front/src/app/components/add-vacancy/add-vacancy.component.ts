import { Component, OnInit } from '@angular/core';
import { LabService } from 'src/app/services/lab.service';
import { VacancyAdd } from 'src/app/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vacancy',
  templateUrl: './add-vacancy.component.html',
  styleUrls: ['./add-vacancy.component.css'],
})
export class AddVacancyComponent implements OnInit {
  vacancy: VacancyAdd = {
    id: 0,
    name: '',
    description: '',
    salary: 0,
    company_id: 0,
  };

  constructor(private service: LabService, private router: Router) {}

  ngOnInit(): void {}

  saveVacancy(): void {
    const data = {
      name: this.vacancy.name,
      description: this.vacancy.description,
      salary: this.vacancy.salary,
      company_id: this.vacancy.company_id,
    };
    this.service.addVacancy(data).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.log(e),
    });
    alert('Saved!');
    this.router.navigateByUrl('vacancies');
    this.vacancy = {
      id: 0,
      name: '',
      description: '',
      salary: 0,
      company_id: 0,
    };
  }
}
