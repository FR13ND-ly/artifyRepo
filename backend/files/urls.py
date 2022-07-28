from django.urls import path, include
from . import views

urlpatterns = [
    path('add/<str:url>/', views.addFile),
]