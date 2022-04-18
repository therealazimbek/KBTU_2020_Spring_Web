from django.urls import path
from rest_framework_simplejwt.views import token_obtain_pair

from .views import *

urlpatterns = [
    path('companies/', CompanyListAPIView.as_view()),
    path('companies/<int:pk>/', CompanyDetailAPIView.as_view()),
    path('companies/<int:pk>/vacancies/', company_vacancies),

    path('vacancies/', VacancyListAPIView.as_view()),
    path('vacancies/<int:pk>/', VacancyDetailAPIView.as_view()),
    path('vacancies/top_ten', vacanciesTopTen),

    path('login/', token_obtain_pair)
]
