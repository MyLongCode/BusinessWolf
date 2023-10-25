from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import User
from .permissions import IsOwnerOrReadOnly, IsStaffOrPostOnly
from .serializers import *
from rest_framework import permissions


class UserAPICreateView(generics.ListCreateAPIView):
    queryset = User.objects.all()

    def get_serializer_class(self):
        if self.request.user.is_active and self.request.user.is_superuser:
            return UserSerializerAdmin
        return UserSerializer


class UserAPIDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated,
                          IsOwnerOrReadOnly]

    def get_serializer_class(self):
        if self.request.user.is_active and self.request.user.is_superuser:
            return UserSerializerAdmin
        return UserSerializer

