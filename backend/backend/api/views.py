from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from .models import Resume, Contact, Project
from .serializers import ResumeSerializer, ProjectSerializer

# FIXED:
# ✓ Added email notification when someone submits the contact form
#   (requires EMAIL_HOST_USER / EMAIL_HOST_PASSWORD in environment)
# ✓ Email send failure is caught gracefully — contact is still saved to DB
# ✓ Removed print/console.log debug statements
# ✓ Cleaner validation with specific field error messages


@api_view(["POST"])
def contact_create(request):
    """Handle contact form submissions and send email notification."""
    data = request.data

    name = data.get("name", "").strip()
    email = data.get("email", "").strip()
    message = data.get("message", "").strip()

    # Validate fields individually for clearer error messages
    if not name:
        return Response({"message": "Name is required."}, status=status.HTTP_400_BAD_REQUEST)
    if not email:
        return Response({"message": "Email is required."}, status=status.HTTP_400_BAD_REQUEST)
    if not message:
        return Response({"message": "Message is required."}, status=status.HTTP_400_BAD_REQUEST)

    # Basic email format check
    if "@" not in email or "." not in email.split("@")[-1]:
        return Response({"message": "Please enter a valid email address."}, status=status.HTTP_400_BAD_REQUEST)

    try:
        # Save to database
        Contact.objects.create(name=name, email=email, message=message)

        # Send email notification to you (non-blocking — failure won't break the response)
        try:
            if settings.EMAIL_HOST_USER:
                send_mail(
                    subject=f"[Portfolio] New message from {name}",
                    message=(
                        f"Name: {name}\n"
                        f"Email: {email}\n\n"
                        f"Message:\n{message}"
                    ),
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[settings.CONTACT_NOTIFICATION_EMAIL],
                    fail_silently=False,
                )
        except Exception:
            # Email failed but message is saved — don't return an error to user
            pass

        return Response(
            {"message": "Message sent successfully! I'll get back to you soon."},
            status=status.HTTP_201_CREATED,
        )

    except Exception as e:
        return Response(
            {"message": "Server error. Please try again later."},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR,
        )


@api_view(["GET"])
def get_resume(request):
    """Get the latest resume."""
    resume = Resume.objects.first()

    if resume:
        serializer = ResumeSerializer(resume)
        return Response(serializer.data)

    return Response({"error": "No resume found."}, status=status.HTTP_404_NOT_FOUND)


@api_view(["GET"])
def project_list(request):
    """Get all projects."""
    projects = Project.objects.all()
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)
