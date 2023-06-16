from . import views
from django.urls import path

urlpatterns = [
    path('', views.home_page, name='home_page'),
    path('greeting/', views.greeting_page, name='greeting_page'),
]