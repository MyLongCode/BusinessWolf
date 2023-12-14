from .models import *
from django.contrib import admin


@admin.register(Answers)
class AnswersAdmin(admin.ModelAdmin):
    list_display = ['answer_id', 'question', 'text', 'explanation', 'is_right']
    list_filter = ['answer_id', 'text', 'explanation', 'is_right']


@admin.register(Questions)
class QuestionsAdmin(admin.ModelAdmin):
    list_display = ['question_id', 'text', 'test_id']


@admin.register(Lessons)
class LessonsAdmin(admin.ModelAdmin):
    list_display = ['lesson_id', 'module', 'number']


admin.site.register(Courses)
admin.site.register(UserCourse)
admin.site.register(Modules)
admin.site.register(CompletedLessons)
admin.site.register(Test)
admin.site.register(CompletedQuestions)
admin.site.register(CompletedTests)
admin.site.register(SelectedAnswers)
