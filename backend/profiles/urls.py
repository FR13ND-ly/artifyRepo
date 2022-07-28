from django.urls import path, include
from . import views

urlpatterns = [
    path('login/<str:token>/', views.login),
    path('update-username/', views.changeUsername)
]