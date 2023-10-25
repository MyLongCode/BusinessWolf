from rest_framework import serializers
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        read_only_fields = ('is_superuser', 'is_staff', 'groups', 'user_permissions')
        permission_classes = IsAuthenticated

    def create(self, validated_data):
        user = super(UserSerializer, self).create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user


class UserSerializerAdmin(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        permission_classes = (IsAuthenticated, IsAdminUser)

    def create(self, validated_data):
        user = super(UserSerializerAdmin, self).create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user
