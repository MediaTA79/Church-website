from django.contrib import admin
from .models import Event, Pastor, Inquiry, Member

# Register your models here.
admin.site.register(Event)
admin.site.register(Member)
admin.site.register(Inquiry)
admin.site.register(Pastor)
