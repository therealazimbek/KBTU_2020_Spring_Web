import { Component, OnInit } from '@angular/core';
import { LabService } from 'src/app/services/lab.service';
import { Company } from 'src/app/models';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css'],
})
export class AddCompanyComponent implements OnInit {
  company: Company = {
    id: 0,
    name: '',
    description: '',
    city: '',
    address: '',
  };

  constructor(private service: LabService, private router: Router) {}

  ngOnInit(): void {}

  saveCompany(): void {
    const data = {
      name: this.company.name,
      description: this.company.description,
      city: this.company.city,
      address: this.company.address,
    };
    this.service.addCompany(data).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.log(e),
    });
    alert('Saved!');
    this.router.navigateByUrl('companies');
    this.company = {
      id: 0,
      name: '',
      description: '',
      city: '',
      address: '',
    };
  }
}
