from django.contrib import admin
from .models import Resume, ContactMessage
from .models import Project
from .models import Contact

admin.site.register(Contact)

admin.site.register(Project)


@admin.register(Resume)
class ResumeAdmin(admin.ModelAdmin):
    list_display = ("title", "created_at")


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "created_at")
