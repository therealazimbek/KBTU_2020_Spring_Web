from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    city = models.CharField(max_length=100)
    address = models.TextField(blank=False)

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'

    def __str__(self) -> str:
        return self.name


class Vacancy(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(blank=False)
    salary = models.FloatField(default=120000)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'

    def __str__(self) -> str:
        return self.name
