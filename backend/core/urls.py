from django.urls import path
from .views import (
    AdminLoginAPIView,
    ContactMessageCreateAPIView,
    ContactMessageListAPIView,
    ContactMessageDeleteAPIView,
    ServiceInquiryCreateAPIView,
    ServiceInquiryListAPIView,
    ServiceInquiryDeleteAPIView,
)

urlpatterns = [
    path('admin/login/', AdminLoginAPIView.as_view(), name='admin-login'),
    
    path('contact/', ContactMessageCreateAPIView.as_view(), name='contact-create'),
    path('contact/list/', ContactMessageListAPIView.as_view(), name='contact-list'),
    path('contact/delete/<int:pk>/', ContactMessageDeleteAPIView.as_view(), name='contact-delete'),

    path('service-inquiry/', ServiceInquiryCreateAPIView.as_view(), name='service-inquiry-create'),
    path('service-inquiry/list/', ServiceInquiryListAPIView.as_view(), name='service-inquiry-list'),
    path('service-inquiry/delete/<int:pk>/', ServiceInquiryDeleteAPIView.as_view(), name='service-inquiry-delete'),
]
