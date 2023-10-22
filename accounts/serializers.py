from rest_framework import serializers
from rest_framework.permissions import IsAuthenticated

from .models import User
from rest_framework.authtoken.models import Token

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'is_superuser']
        permission_classes = (IsAuthenticated,)




# class UserToken(serializers.ModelSerializer):
#     user = Token.objects.get(key='token string').user
#     foo = serializers.SerializerMethodField()
#
#     class Meta:
#         model = Token
#         fields = ['key', 'created', 'user_id']