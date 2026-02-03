from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse


def home(request):
    return JsonResponse({
        "status": "OK",
        "message": "Backend is running 🚀"
    })


urlpatterns = [
    path('', home),          # 👈 root fix
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
]
