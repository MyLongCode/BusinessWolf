from rest_framework import serializers
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

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


class AnswersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answers
        fields = '__all__'
        permission_classes = (IsAuthenticated,)


class SelectedAnswersSerializer(serializers.ModelSerializer):
    class Meta:
        model = SelectedAnswers
        fields = '__all__'
        permission_classes = (IsAuthenticated,)


class CompletedTestsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompletedTests
        fields = ('test', 'user_id', 'id')
        read_only_fields = ('user_id', 'id')
        permission_classes = (IsAuthenticated,)

    def validate(self, attrs):
        data = super().validate(attrs)
        data['user_id'] = self.context['request'].user.id
        return data


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Questions
        fields = '__all__'
        read_only_fields = ('__all__',)
        permission_classes = (IsAuthenticated,)


class CompletedQuestionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompletedQuestions
        fields = ('id', 'completed_test', 'question')
        permission_classes = (IsAuthenticated,)



class CompletedQuestionCheckSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompletedQuestions
        fields = ('id', 'completed_test', 'question')
        read_only_fields = ('completed_test', 'question')
        permission_classes = (IsAuthenticated,)

    def update(self, instance, validated_data):
        selected_answers = SelectedAnswers.objects.filter(completed_question=self.data['id'])
        answers = Answers.objects.filter(id__in=selected_answers.values_list('answer_id', flat=True))
        answers_question_right = Answers.objects.filter(question_id=self.data['question']).filter(is_right=True)
        if sorted(answers.values_list('id', flat=True)) == sorted(answers_question_right.values_list('id', flat=True)):
            instance.is_right = True
        else:
            instance.is_right = False
        instance.save()
        return instance
