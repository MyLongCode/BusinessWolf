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
        user_data['full_name'] = user.full_name
        user_data['email'] = user.email
        user_data['address'] = user.address
        user_data['education_class'] = user.education_class
        user_data['coins'] = user.coins
        token['user_data'] = user_data

        return token
