from django.http import JsonResponse
from .models import Visitor

def log_visitor(request):
    # Extract visitor information
    ip_address = get_client_ip(request)
    user_agent = request.META.get('HTTP_USER_AGENT', 'Unknown')
    referer = request.META.get('HTTP_REFERER', None)
    language = request.META.get('HTTP_ACCEPT_LANGUAGE', 'Unknown')

    # Save visitor data to the database
    Visitor.objects.create(
        ip_address=ip_address,
        user_agent=user_agent,
        referer=referer,
        language=language
    )

    # Return the current visitor count
    visitor_count = Visitor.objects.count()
    return JsonResponse({'visitor_count': visitor_count})

# Helper function to get the client IP address
def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip
