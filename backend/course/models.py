from django.db import models
from django_jsonform.models.fields import JSONField

from accounts.models import User


class Courses(models.Model):
    course_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=100)

    class Meta:
        db_table = 'courses'
        verbose_name_plural = 'courses'


class UserCourse(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    course = models.ForeignKey(Courses, on_delete=models.CASCADE)

    class Meta:
        db_table = 'user_courses'
        verbose_name_plural = 'user courses'


class Modules(models.Model):
    module_id = models.AutoField(primary_key=True)
    course = models.ForeignKey(Courses, on_delete=models.CASCADE)
    number = models.IntegerField()
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=100)

    class Meta:
        db_table = 'modules'
        verbose_name_plural = 'modules'


class Lessons(models.Model):
    ITEMS_SCHEMA = {
        'type': 'object',
        'keys': {
            'list': {
                'type': 'array',
                'items': {
                    'type': 'object',
                    'keys': {
                        'author': {
                            'type': 'string'
                        },
                        'text': {
                            'type': 'string'
                        },
                        'type': {
                            'type': 'string',
                            'choices': ['text', 'picture', 'video']
                        },
                        'url': {
                            'type': 'string'
                        }
                    }
                }
            }
        }
    }

    lesson_id = models.AutoField(primary_key=True)
    module = models.ForeignKey(Modules, on_delete=models.CASCADE)
    number = models.IntegerField()
    chat_text = JSONField(schema=ITEMS_SCHEMA)
    name = models.CharField(max_length=300)
    description = models.CharField(max_length=300)
    duration = models.IntegerField()

    class Meta:
        db_table = 'lessons'
        verbose_name_plural = 'lessons'


class Test(models.Model):
    test_id = models.AutoField(primary_key=True)
    text = models.CharField(max_length=500)
    lesson = models.ForeignKey(Lessons, on_delete=models.CASCADE)
    name = models.CharField(max_length=500)
    description = models.CharField(max_length=500)
    duration = models.IntegerField()

    class Meta:
        db_table = 'tests'
        verbose_name_plural = 'tests'


class Questions(models.Model):
    question_id = models.AutoField(primary_key=True)
    text = models.CharField(max_length=500)
    test = models.ForeignKey(Test, on_delete=models.CASCADE)

    class Meta:
        db_table = 'questions'
        verbose_name_plural = 'questions'


class CompletedLessons(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    lesson = models.ForeignKey(Lessons, on_delete=models.CASCADE)

    class Meta:
        db_table = 'user_completed_lessons'
        verbose_name_plural = 'user completed lessons'


class Answers(models.Model):
    answer_id = models.AutoField(primary_key=True)
    question = models.ForeignKey(Questions, on_delete=models.CASCADE, related_name='answers')
    text = models.CharField(max_length=300)
    explanation = models.CharField(max_length=500)
    is_right = models.BooleanField(default=False)

    class Meta:
        db_table = 'answers'
        verbose_name_plural = 'answers'


class CompletedTests(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    test = models.ForeignKey(Test, on_delete=models.CASCADE)

    class Meta:
        db_table = 'completed_tests'
        verbose_name_plural = 'completed tests'


class CompletedQuestions(models.Model):
    completed_test = models.ForeignKey(CompletedTests, on_delete=models.CASCADE, related_name='completed_questions')
    question = models.ForeignKey(Questions, on_delete=models.CASCADE)
    is_right = models.BooleanField(default=False)

    class Meta:
        db_table = 'completed_questions'
        verbose_name_plural = 'completed questions'


class SelectedAnswers(models.Model):
    completed_question = models.ForeignKey(CompletedQuestions, on_delete=models.CASCADE, related_name='selected_answers')
    answer = models.ForeignKey(Answers, on_delete=models.CASCADE)

    class Meta:
        db_table = 'selected_answers'
        verbose_name_plural = 'selected answers'
