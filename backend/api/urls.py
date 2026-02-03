from django.urls import path
from .views import get_resume, contact_view
from .views import project_list
from .views import contact_create


urlpatterns = [
    path("resume/", get_resume, name="get_resume"),
    path("contact/", contact_view, name="contact"),
    path("projects/", project_list),
    path("contact/", contact_create),

]
