# views.py
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.views import APIView
from rest_framework.decorators import permission_classes
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from .models import ContactMessage, ServiceInquiry
from .serializers import ContactMessageSerializer, ServiceInquirySerializer

class AdminLoginAPIView(APIView):
    permission_classes = [AllowAny]  # Allow unauthenticated users to login

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)

        if user is not None and user.is_staff:
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key})
        else:
            return Response({'error': 'Invalid credentials or not an admin'}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def contact_list_create(request):
    if request.method == 'GET':
        messages = ContactMessage.objects.all().order_by('-id')
        serializer = ContactMessageSerializer(messages, many=True)
        return Response(serializer.data)
    
    if request.method == 'POST':
        serializer = ContactMessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=400)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def contact_delete(request, pk):
    try:
        message = ContactMessage.objects.get(pk=pk)
        message.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    except ContactMessage.DoesNotExist:
        return Response({"error": "Message not found"}, status=404)

class ServiceInquiryCreateAPIView(generics.CreateAPIView):
    queryset = ServiceInquiry.objects.all()
    serializer_class = ServiceInquirySerializer