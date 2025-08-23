# backend/api/urls.py
from django.urls import path, include
from rest_framework import routers
from rest_framework.routers import DefaultRouter
from .views import EventViewSet, MemberViewSet, PastorViewSet, InquiryViewSet, health
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'members', MemberViewSet)
router.register(r'inquiries', InquiryViewSet)
router.register(r'events', EventViewSet)
router.register(r'pastor', PastorViewSet, basename='pastor')

urlpatterns = [
    path('', include(router.urls)),
    path('health/', health)
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
