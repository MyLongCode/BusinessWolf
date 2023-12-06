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
    path('api/test/', TestAPICreateView.as_view()),
    path('api/test/<int:pk>/', TestAPIDetail.as_view()),

    path('api/admin/course/', AdminCoursesAPICreateView.as_view()),
    path('api/admin/course/<int:pk>/', AdminCoursesAPIDetail.as_view()),
    path('api/admin/usercourse/', AdminUserCourseAPICreateView.as_view()),
    path('api/admin/usercourse/<int:pk>/', AdminUserCourseAPIDetail.as_view()),
    path('api/admin/modules/', AdminModulesAPICreateView.as_view()),
    path('api/admin/modules/<int:pk>/', AdminModulesAPIDetail.as_view()),
    path('api/admin/lessons/', AdminLessonsAPICreateView.as_view()),
    path('api/admin/lessons/<int:pk>/', AdminLessonsAPIDetail.as_view()),
    path('api/admin/question/', AdminQuestionAPICreateView.as_view()),
    path('api/admin/question/<int:pk>/', AdminQuestionAPIDetail.as_view()),
    path('api/admin/completedquestions/', AdminCompletedQuestionsAPICreateView.as_view()),
    path('api/admin/completedquestions/<int:pk>/', AdminCompletedQuestionsAPIDetail.as_view()),
    path('api/admin/test/', AdminTestAPICreateView.as_view()),
    path('api/admin/test/<int:pk>/', AdminTestAPIDetail.as_view()),
]
