from .models import *
from django.contrib import admin


@admin.register(Answers)
class AnswersAdmin(admin.ModelAdmin):
    list_display = ['answer_id', 'question', 'text', 'explanation', 'is_right']
    list_filter = ['answer_id', 'text', 'explanation', 'is_right']


@admin.register(Questions)
class QuestionsAdmin(admin.ModelAdmin):
    list_display = ['question_id', 'text', 'test_id']
    list_filter = ['question_id', 'text', 'test_id']


@admin.register(Lessons)
class LessonsAdmin(admin.ModelAdmin):
    list_display = ['lesson_id', 'module', 'number']
    list_filter = ['lesson_id', 'module', 'number']


@admin.register(Courses)
class CoursesAdmin(admin.ModelAdmin):
    list_display = ['course_id', 'name', 'description']
    list_filter = ['course_id', 'name', 'description']


@admin.register(UserCourse)
class UserCourseAdmin(admin.ModelAdmin):
    list_display = ['id', 'course_id', 'user_id']
    list_filter = ['id', 'course_id', 'user_id']


@admin.register(Modules)
class ModulesAdmin(admin.ModelAdmin):
    list_display = ['module_id', 'number', 'name', 'description', 'course_id']
    list_filter = ['module_id', 'number', 'name', 'description', 'course_id']


@admin.register(CompletedLessons)
class CompletedLessonsAdmin(admin.ModelAdmin):
    list_display = ['id', 'lesson_id', 'user_id']
    list_filter = ['id', 'lesson_id', 'user_id']


@admin.register(Test)
class TestAdmin(admin.ModelAdmin):
    list_display = ['test_id', 'text', 'name', 'description', 'duration', 'lesson_id']
    list_filter = ['test_id', 'text', 'name', 'description', 'duration', 'lesson_id']


@admin.register(CompletedQuestions)
class CompletedQuestionsAdmin(admin.ModelAdmin):
    list_display = ['id', 'is_right', 'completed_test_id', 'question_id']
    list_filter = ['id', 'is_right', 'completed_test_id', 'question_id']


@admin.register(CompletedTests)
class CompletedTestsAdmin(admin.ModelAdmin):
    list_display = ['id', 'test_id', 'user_id']
    list_filter = ['id', 'test_id', 'user_id']


@admin.register(SelectedAnswers)
class SelectedAnswersAdmin(admin.ModelAdmin):
    list_display = ['id', 'answer_id', 'completed_question_id']
    list_filter = ['id', 'answer_id', 'completed_question_id']
