# Create your views here.
from rest_framework import generics, response
from .models import User
from .permissions import IsOwner
from .serializers import *
from rest_framework import permissions


class UserAPICreateView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializerAdmin
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]


class UserAPIDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    permission_classes = [permissions.IsAuthenticated,
                          IsOwner]

    def get_serializer_class(self):
        if self.request.user.is_active and self.request.user.is_superuser:
            return UserSerializerAdmin
        return UserSerializer
