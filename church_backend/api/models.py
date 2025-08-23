# backend/api/models.py
from django.db import models

class Event(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    date = models.DateTimeField()
    event_image = models.ImageField(upload_to='images', null=True, blank=True)
    # image_url = models.URLField()

    def __str__(self):
        return self.title

class Member(models.Model):
    first_name = models.CharField(max_length=120)
    last_name = models.CharField(max_length=120, blank=True)
    email = models.EmailField(blank=True, null=True)
    phone = models.CharField(max_length=40, blank=True, null=True)
    joined_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class Inquiry(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(blank=True, null=True)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    handled = models.BooleanField(default=False)

    def __str__(self):
        return f"Inquiry from {self.name} ({self.email})"

class Pastor(models.Model):
    name = models.CharField(max_length=200)
    bio = models.TextField(blank=True)
    image = models.ImageField(upload_to='images', blank=True, null=True)
    contact_email = models.EmailField(blank=True, null=True)

    def __str__(self):
        return f"Pastor {self.name} created"
