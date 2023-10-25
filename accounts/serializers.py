from rest_framework import serializers
from rest_framework.permissions import IsAuthenticated

from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        permission_classes = (IsAuthenticated,)