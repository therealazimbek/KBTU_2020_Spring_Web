from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics, mixins
from rest_framework.permissions import IsAuthenticated, AllowAny

from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer


class CompanyListAPIView(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    permission_classes = [IsAuthenticated]


class CompanyDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    permission_classes = [IsAuthenticated]


class VacancyListAPIView(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    permission_classes = [IsAuthenticated]


class VacancyDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    permission_classes = [IsAuthenticated]


@api_view(['GET', 'POST'])
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


@api_view(['GET', 'PUT', 'DELETE'])
def company_detail(request, pk):
    try:
        company = Company.objects.get(id=pk)
    except Company.DoesNotExist as e:
        return Response({'message': str(e)}, status=400)

    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CompanySerializer(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    elif request.method == 'DELETE':
        company.delete()
        return Response({'message': 'deleted'}, status=204)


@api_view(['GET'])
def company_vacancies(request, pk):
    try:
        company = Company.objects.get(id=pk)
        vacancies = company.vacancy_set.all()
        serializer = VacancySerializer(vacancies, many=True)
    except Company.DoesNotExist as e:
        return Response({"message": str(e)}, status=404)
    return Response(serializer.data)


@api_view(['GET'])
def vacanciesTopTen(request):
    vacancies = Vacancy.objects.all().order_by('-salary')
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)