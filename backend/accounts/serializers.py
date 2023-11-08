from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import User
from rest_framework import permissions
from django.contrib.auth.hashers import make_password


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('coins', 'education_class', 'address', 'phone', 'full_name',
                  'is_superuser', 'is_staff', 'role')
        read_only_fields = ('is_superuser', 'is_staff', 'groups', 'role')
        permission_classes = permissions.IsAuthenticated


class UserSerializerAdmin(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'is_superuser', 'is_staff', 'role',
                  'coins', 'education_class', 'address', 'phone', 'full_name'
                  )
        read_only_fields = ('role', )
        permission_classes = (permissions.IsAuthenticated, permissions.IsAdminUser)


class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'is_superuser', 'is_staff', 'role',
                  'coins', 'education_class', 'address', 'phone', 'full_name'
                  )
        read_only_fields = ('role', )
        permission_classes = permissions.IsAuthenticated

    def create(self, validated_data):
        user = User.objects.create(**validated_data)
        user.set_password(validated_data['password'])
        user.role = 'admin' if user.is_superuser else 'user'
        return user

    def validate_password(self, value: str) -> str:
        return make_password(value)


class ChangeUserPasswordSerializer(serializers.ModelSerializer):
    password = serializers.CharField(required=True)
    class Meta:
        model = User
        fields = ('id', 'username', 'password')
        permission_classes = (permissions.IsAuthenticated, permissions.IsAdminUser)

    def update(self, instance, validated_data):
        instance.password = make_password(validated_data.get('password', instance.password))
        instance.save()
        return instance


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        user_data = dict()
        user_data['id'] = self.user.id
        user_data['username'] = self.user.username
        user_data['full_name'] = self.user.full_name
        user_data['email'] = self.user.email
        user_data['address'] = self.user.address
        user_data['education_class'] = self.user.education_class
        user_data['coins'] = self.user.coins
        user_data['phone'] = self.user.phone
        data['user_data'] = user_data

        return data
