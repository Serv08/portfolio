from django.contrib import admin
from .models import Visitor

@admin.register(Visitor)
class VisitorAdmin(admin.ModelAdmin):
    list_display = ('ip_address', 'timestamp', 'user_agent', 'referer', 'language')
    list_filter = ('timestamp',)
