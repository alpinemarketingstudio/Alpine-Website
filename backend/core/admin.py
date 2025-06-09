from django.contrib import admin

# Register your models here.
from .models import ContactMessage, ServiceInquiry

admin.site.register(ContactMessage)
admin.site.register(ServiceInquiry)