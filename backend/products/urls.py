from django.urls import path, include
from . import views

urlpatterns = [
    path('all/', views.exploreAll),
    path('top/', views.exploreTop),
    path('add/', views.addProduct),
    path('get-saved-state/', views.getSavedState),
    path('saved/<str:token>/', views.getSaved),
    path('save/', views.addToSave),
    path('user-products/<str:token>/', views.getUserProducts),
    path('products/', views.getProducts),
    path('<int:id>/', views.getProduct)
]