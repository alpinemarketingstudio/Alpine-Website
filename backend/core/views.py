# views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import ContactMessage
from .serializers import ContactMessageSerializer

@api_view(['GET', 'POST'])
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
def contact_delete(request, pk):
    try:
        message = ContactMessage.objects.get(pk=pk)
        message.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    except ContactMessage.DoesNotExist:
        return Response({"error": "Message not found"}, status=404)
