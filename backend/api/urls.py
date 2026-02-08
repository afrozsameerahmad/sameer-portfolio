from django.urls import path
from .views import get_resume, contact_create, project_list

urlpatterns = [
    path("resume/", get_resume, name="get_resume"),
    path("projects/", project_list, name="project_list"),
    path("contact/", contact_create, name="contact_create"),  # Only one contact endpoint
]