from django.shortcuts import render
from django.http import JsonResponse

from .models import Company, Vacancy


def home(request):
    return JsonResponse({'message': 'HI'})


def companiesListPage(request):
    companies = [company.to_json() for company in Company.objects.all()]
    return JsonResponse(companies, safe=False)


def companyDetailPage(request, pk):
    try:
        company = Company.objects.get(id=pk)
    except Company.DoesNotExist as e:
        return JsonResponse({"message": str(e)}, status=400)
    return JsonResponse(company.to_json()) 


def companyVacancies(request, pk):
    try:
        company = Company.objects.get(id=pk)
        vacancies =[v.to_json() for v in company.vacancy_set.all()]
    except Company.DoesNotExist as e:
        return JsonResponse({"message": str(e)}, status=400)
    return JsonResponse(vacancies, safe=False) 


def vacanciesListPage(request):
    vacancies = [vacancy.to_json() for vacancy in Vacancy.objects.all()]
    return JsonResponse(vacancies, safe=False)


def vacancyDetailPage(request, pk):
    try:
        vacancy = Vacancy.objects.get(id=pk)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({"message": str(e)}, status=400)
    return JsonResponse(vacancy.to_json()) 


def vacanciesTopTen(request):
    vacancies = [vacancy.to_json() for vacancy in Vacancy.objects.all().order_by('-salary')]
    return JsonResponse(vacancies[:10], safe=False)