from rest_framework import serializers
from rest_framework.permissions import IsAuthenticated

from .models import *


# FOR ADMIN SERIALIZERS
class AdminCoursesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Courses
        fields = '__all__'
        read_only_fields = ('id',)
        permission_classes = (IsAuthenticated,)


class AdminUserCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserCourse
        fields = '__all__'
        permission_classes = (IsAuthenticated,)


class AdminModulesSerializer(serializers.ModelSerializer):
    module_id = models.AutoField(primary_key=True)
    class Meta:
        model = Modules
        fields = '__all__'
        read_only_fields = ('module_id',)
        permission_classes = (IsAuthenticated,)


class AdminLessonsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lessons
        fields = '__all__'
        permission_classes = (IsAuthenticated,)


class AdminQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Questions
        fields = '__all__'
        permission_classes = (IsAuthenticated,)


class AdminCompletedQuestionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompletedQuestions
        fields = '__all__'
        permission_classes = (IsAuthenticated,)


class AdminTestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = '__all__'
        permission_classes = (IsAuthenticated,)


class AdminCompletedLessonsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompletedLessons
        fields = '__all__'
        permission_classes = (IsAuthenticated,)
# FOR USER SERIALISERS


class CoursesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Courses
        fields = '__all__'
        permission_classes = (IsAuthenticated,)


class UserCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserCourse
        fields = '__all__'
        read_only_fields = ('__all__',)
        permission_classes = (IsAuthenticated,)


class ModulesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Modules
        fields = '__all__'
        read_only_fields = ('__all__',)
        permission_classes = (IsAuthenticated,)


class LessonsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lessons
        fields = '__all__'
        read_only_fields = ('__all__',)
        permission_classes = (IsAuthenticated,)


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Questions
        fields = '__all__'
        read_only_fields = ('__all__',)
        permission_classes = (IsAuthenticated,)


class CompletedQuestionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompletedQuestions
        fields = '__all__'
        permission_classes = (IsAuthenticated,)


class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = '__all__'
        read_only_fields = ('__all__',)
        permission_classes = (IsAuthenticated,)


class CompletedLessonsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompletedLessons
        fields = '__all__'
        permission_classes = (IsAuthenticated,)