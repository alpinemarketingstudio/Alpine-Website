from django.urls import path
from . import views

urlpatterns = [
    path('contact/',views.contact_list_create, name='contact_list_create'),
    path('contact/<int:pk>/', views.contact_delete, name='contact_delete'),
]
