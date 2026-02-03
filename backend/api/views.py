from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Resume, ContactMessage
from .serializers import ResumeSerializer, ContactMessageSerializer
from .models import Project
from .serializers import ProjectSerializer
from .models import Contact
from rest_framework import status

@api_view(['POST'])
def contact_create(request):
    data = request.data

    Contact.objects.create(
        name=data.get("name"),
        email=data.get("email"),
        message=data.get("message")
    )

    return Response(
        {"message": "Message sent successfully"},
        status=status.HTTP_201_CREATED
    )

@api_view(["GET"])
def get_resume(request):
    resume = Resume.objects.first()

    if resume:
        serializer = ResumeSerializer(resume)
        return Response(serializer.data)

    return Response({"error": "No resume found"})


@api_view(["POST"])
def contact_view(request):
    serializer = ContactMessageSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Message sent successfully"})

    return Response(serializer.errors, status=400)
@api_view(['GET'])
def project_list(request):
    projects = Project.objects.all()
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)