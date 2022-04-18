import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacanciesToptenComponent } from './vacancies-topten.component';

describe('VacanciesToptenComponent', () => {
  let component: VacanciesToptenComponent;
  let fixture: ComponentFixture<VacanciesToptenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacanciesToptenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacanciesToptenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
