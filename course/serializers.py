from rest_framework import serializers
from rest_framework.permissions import IsAuthenticated

from .models import *


class CoursesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Courses
        fields = '__all__'
        permission_classes = (IsAuthenticated,)


class UserCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserCourse
        fields = '__all__'
        permission_classes = (IsAuthenticated,)


class ModulesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Modules
        fields = '__all__'
        permission_classes = (IsAuthenticated,)


class LessonsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lessons
        fields = '__all__'
        permission_classes = (IsAuthenticated,)


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'
        permission_classes = (IsAuthenticated,)


class CompletedQuestionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompletedQuestions
        fields = '__all__'
        permission_classes = (IsAuthenticated,)


# class UserToken(serializers.ModelSerializer):
#     user = Token.objects.get(key='token string').user
#     foo = serializers.SerializerMethodField()
#
#     class Meta:
#         model = Token
#         fields = ['key', 'created', 'user_id']