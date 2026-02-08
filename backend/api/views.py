from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Resume, Contact, Project
from .serializers import ResumeSerializer, ProjectSerializer

@api_view(['POST'])
def contact_create(request):
    """Handle contact form submissions"""
    try:
        data = request.data
        
        # Validate required fields
        name = data.get("name", "").strip()
        email = data.get("email", "").strip()
        message = data.get("message", "").strip()
        
        if not name or not email or not message:
            return Response(
                {"message": "All fields are required"},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Create contact message
        Contact.objects.create(
            name=name,
            email=email,
            message=message
        )
        
        return Response(
            {"message": "Message sent successfully! I'll get back to you soon."},
            status=status.HTTP_201_CREATED
        )
    
    except Exception as e:
        return Response(
            {"message": f"Server error: {str(e)}"},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )


@api_view(["GET"])
def get_resume(request):
    """Get the latest resume"""
    resume = Resume.objects.first()
    
    if resume:
        serializer = ResumeSerializer(resume)
        return Response(serializer.data)
    
    return Response(
        {"error": "No resume found"}, 
        status=status.HTTP_404_NOT_FOUND
    )


@api_view(['GET'])
def project_list(request):
    """Get all projects"""
    projects = Project.objects.all()
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)