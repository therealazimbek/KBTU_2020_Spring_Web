
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Company, Vacancy


def home(request):
    return JsonResponse({'message': 'HI'})

@csrf_exempt
def companiesListPage(request):
    if request.method == 'GET':
        companies = [company.to_json() for company in Company.objects.all()]
        return JsonResponse(companies, safe=False)

    elif request.method == 'POST':
        data = json.loads(request.body)
        try:
            company = Company.objects.create(name=data['name'], description=data['description'], city=data['city'], address=data['address'])
        except Exception as e:
            return JsonResponse({'message': str(e)})
        return JsonResponse(company.to_json())


@csrf_exempt
def companyDetailPage(request, pk):
    try:
        company = Company.objects.get(id=pk)
    except Company.DoesNotExist as e:
        return JsonResponse({"message": str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(company.to_json()) 
    elif request.method == 'PUT':
        data = json.loads(request.body)
        company.description = data['description']
        company.save()
        return JsonResponse(company.to_json())
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'message': 'Selected company deleted!'})        


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