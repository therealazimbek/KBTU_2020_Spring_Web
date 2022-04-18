import { Component, OnInit } from '@angular/core';
import { Company } from '../../models';
import { LabService } from 'src/app/services/lab.service';
@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
})
export class CompaniesComponent implements OnInit {
  companies: Company[] = [];

  constructor(private service: LabService) {}

  ngOnInit(): void {
    this.service.getCompanies().subscribe((data) => {
      this.companies = data;
    });
  }
}
