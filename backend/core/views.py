from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics
from rest_framework.decorators import api_view, permission_classes

from .models import ContactMessage, ServiceInquiry
from .serializers import ContactMessageSerializer, ServiceInquirySerializer


class AdminLoginAPIView(APIView):
    permission_classes = [AllowAny]  # Allow unauthenticated users to log in

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)

        if user is not None and user.is_staff:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'token': token.key})
        else:
            return Response({'error': 'Invalid credentials or not an admin'}, status=status.HTTP_401_UNAUTHORIZED)


# --- Contact Messages ---

class ContactMessageCreateAPIView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    permission_classes = [AllowAny]  # Anyone can submit a message


class ContactMessageListAPIView(generics.ListAPIView):
    queryset = ContactMessage.objects.all().order_by('-id')
    serializer_class = ContactMessageSerializer
    permission_classes = [IsAuthenticated]  # Only authenticated users can view messages


class ContactMessageDeleteAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, pk):
        try:
            message = ContactMessage.objects.get(pk=pk)
            message.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except ContactMessage.DoesNotExist:
            return Response({"error": "Message not found"}, status=status.HTTP_404_NOT_FOUND)


# --- Service Inquiry ---

class ServiceInquiryCreateAPIView(generics.CreateAPIView):
    queryset = ServiceInquiry.objects.all()
    serializer_class = ServiceInquirySerializer
    permission_classes = [AllowAny]  # Anyone can submit service inquiries

class ServiceInquiryListAPIView(generics.ListAPIView):
    queryset = ServiceInquiry.objects.all().order_by('-submitted_at')
    serializer_class = ServiceInquirySerializer
    permission_classes = [IsAuthenticated]  # Only admin can view inquiries

class ServiceInquiryDeleteAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, pk):
        try:
            inquiry = ServiceInquiry.objects.get(pk=pk)
            inquiry.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except ServiceInquiry.DoesNotExist:
            return Response({"error": "Inquiry not found"}, status=status.HTTP_404_NOT_FOUND)