from django.urls import path
from .views import contact_message_api

urlpatterns = [
    path('contact/', contact_message_api, name='contact_message_api'),
]
