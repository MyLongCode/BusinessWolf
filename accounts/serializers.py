from rest_framework import serializers
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
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


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        user_data = dict()
        user_data['id'] = user.id
        user_data['username'] = user.username
        user_data['password'] = user.password
        user_data['is_superuser'] = user.is_superuser
        user_data['first_name'] = user.first_name
        user_data['last_name'] = user.last_name
        user_data['email'] = user.email
        user_data['is_staff'] = user.is_staff
        user_data['is_active'] = user.is_active
        user_data['date_joined'] = str(user.date_joined)
        token['user_data'] = user_data

        return token
