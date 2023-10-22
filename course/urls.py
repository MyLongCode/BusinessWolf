from django.contrib import admin
from django.urls import path, include, re_path
from course.views import *

urlpatterns = [
    path('api/course/', CoursesAPICreateView.as_view()),
    path('api/course/<int:pk>/', CoursesAPIDetail.as_view()),
    path('api/usercourse/', UserCourseAPICreateView.as_view()),
    path('api/usercourse/<int:pk>/', UserCourseAPIDetail.as_view()),
    path('api/modules/', ModulesAPICreateView.as_view()),
    path('api/modules/<int:pk>/', ModulesAPIDetail.as_view()),
    path('api/lessons/', LessonsAPICreateView.as_view()),
    path('api/lessons/<int:pk>/', LessonsAPIDetail.as_view()),
    path('api/question/', QuestionAPICreateView.as_view()),
    path('api/question/<int:pk>/', QuestionAPIDetail.as_view()),
    path('api/completedquestions/', CompletedQuestionsAPICreateView.as_view()),
    path('api/completedquestions/<int:pk>/', CompletedQuestionsAPIDetail.as_view()),
]
