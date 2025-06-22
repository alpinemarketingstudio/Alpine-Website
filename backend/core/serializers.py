from rest_framework import serializers
from .models import ContactMessage, ServiceInquiry

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'


class ServiceInquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceInquiry
        fields = '__all__'