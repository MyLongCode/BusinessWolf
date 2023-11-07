from requests import Response
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import User
from rest_framework import permissions
from django.contrib.auth.hashers import make_password


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        read_only_fields = ('is_superuser', 'is_staff', 'groups', 'user_permissions', 'role')
        permission_classes = permissions.IsAuthenticated

    def create(self, validated_data):
        user = User.objects.create(**validated_data)
        user.set_password(validated_data['password'])
        user['role'] = 'admin' if user.is_superuser else 'user'
        return user

    def validate_password(self, value: str) -> str:
        return make_password(value)


class UserSerializerAdmin(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'is_superuser', 'role')
        read_only_fields = ('role', )
        permission_classes = (permissions.IsAuthenticated, permissions.IsAdminUser)

    def create(self, validated_data):
        user = User.objects.create(**validated_data)
        user.set_password(validated_data['password'])
        user.role = 'admin' if user.is_superuser else 'user'
        return user

    def validate_password(self, value: str) -> str:
        return make_password(value)


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        user_data = dict()
        user_data['id'] = user.id
        user_data['username'] = user.username
        user_data['full_name'] = user.full_name
        user_data['email'] = user.email
        user_data['address'] = user.address
        user_data['education_class'] = user.education_class
        user_data['coins'] = user.coins
        user_data['phone'] = user.phone
        token['user_data'] = user_data

        return token
