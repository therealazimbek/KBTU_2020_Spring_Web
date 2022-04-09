from django import views
from django.urls import path
from api import views

urlpatterns = [
    path('', views.home),
    path('companies/', views.companiesListPage),
    path('companies/<int:pk>/', views.companyDetailPage),
    path('companies/<int:pk>/vacancies/', views.companyVacancies),
    path('vacancies/', views.vacanciesListPage),
    path('vacancies/<int:pk>/', views.vacancyDetailPage),
    path('vacancies/top_ten/', views.vacanciesTopTen)
]
