# backend/api/views.py
from rest_framework import viewsets
from .models import Event, Member, Pastor, Inquiry
from .serializers import EventSerializer, InquirySerializer, MemberSerializer, PastorSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all().order_by('-joined_at')
    serializer_class = MemberSerializer

class InquiryViewSet(viewsets.ModelViewSet):
    queryset = Inquiry.objects.all().order_by('-created_at')
    serializer_class = InquirySerializer

class PastorViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Pastor.objects.all()
    serializer_class = PastorSerializer


# health check
@api_view(['GET'])
def health(request):
    return Response({"ok": True})