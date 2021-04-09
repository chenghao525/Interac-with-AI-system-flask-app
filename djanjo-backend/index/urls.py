from django.urls import path

from . import views

urlpatterns = [
    # Starter Page- Register Participant
    path('start/', views.starter),
]
