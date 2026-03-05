from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

def home(request):
    return JsonResponse({"status": "ok", "message": "Sameer Portfolio Backend is running"})

# Health check endpoint — used by Contact.jsx wake-up ping
def health(request):
    return JsonResponse({"status": "healthy"})

urlpatterns = [
    path("", home),
    path("api/health/", health),          # ✅ wake-up ping from frontend
    path("admin/", admin.site.urls),
    path("api/", include("api.urls")),
]