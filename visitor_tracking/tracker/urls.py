from django.urls import path
from .views import log_visitor

urlpatterns = [
    path('log-visitor/', log_visitor, name='log_visitor'),
]
