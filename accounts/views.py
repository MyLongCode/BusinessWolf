from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import User
from .serializers import *


class UserAPICreateView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserAPIDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


