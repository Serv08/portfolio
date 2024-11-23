from django.db import models

class Visitor(models.Model):
    ip_address = models.GenericIPAddressField()
    user_agent = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    referer = models.TextField(blank=True, null=True)
    language = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return f"Visitor {self.ip_address} at {self.timestamp}"
