from django.urls import path
from . import views
from .views import ServiceInquiryCreateAPIView
from .views import AdminLoginAPIView

urlpatterns = [
    path('contact/',views.contact_list_create, name='contact_list_create'),
    path('contact/<int:pk>/', views.contact_delete, name='contact_delete'),
    path('service-inquiry/', ServiceInquiryCreateAPIView.as_view(), name='service-inquiry'),
    path('admin/login/', AdminLoginAPIView.as_view(), name='admin-login'),
]
