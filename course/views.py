from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import *
from .serializers import *

# лучше найти как сократить код
class CoursesAPICreateView(generics.ListCreateAPIView):
    queryset = Courses.objects.all()
    serializer_class = CoursesSerializer


class CoursesAPIDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Courses.objects.all()
    serializer_class = CoursesSerializer


class UserCourseAPICreateView(generics.ListCreateAPIView):
    queryset = UserCourse.objects.all()
    serializer_class = UserCourseSerializer


class UserCourseAPIDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserCourse.objects.all()
    serializer_class = UserCourseSerializer


class ModulesAPICreateView(generics.ListCreateAPIView):
    queryset = Modules.objects.all()
    serializer_class = ModulesSerializer


class ModulesAPIDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Modules.objects.all()
    serializer_class = ModulesSerializer


class LessonsAPICreateView(generics.ListCreateAPIView):
    queryset = Lessons.objects.all()
    serializer_class = LessonsSerializer


class LessonsAPIDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lessons.objects.all()
    serializer_class = LessonsSerializer


class QuestionAPICreateView(generics.ListCreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


class QuestionAPIDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


class CompletedQuestionsAPICreateView(generics.ListCreateAPIView):
    queryset = CompletedQuestions.objects.all()
    serializer_class = CompletedQuestionsSerializer


class CompletedQuestionsAPIDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = CompletedQuestions.objects.all()
    serializer_class = CompletedQuestionsSerializer


