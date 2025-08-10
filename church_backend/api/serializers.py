# backend/api/serializers.py
from rest_framework import serializers
from .models import Event, Member, Pastor, Inquiry

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = '__all__'

class InquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inquiry
        fields = '__all__'

class PastorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pastor
        fields = '__all__'        