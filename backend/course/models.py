from django.db import models

from accounts.models import User


class Courses(models.Model):
    course_name = models.CharField(max_length=100)
    about_course = models.CharField(max_length=100)

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
    course = models.ForeignKey(Courses, on_delete=models.CASCADE)
    number = models.IntegerField()

    class Meta:
        db_table = 'modules'
        verbose_name_plural = 'modules'


class Lessons(models.Model):
    module = models.ForeignKey(Modules, on_delete=models.CASCADE)
    number = models.IntegerField()
    chat_text = models.CharField(max_length=300)
    abstract_text = models.CharField(max_length=300)

    class Meta:
        db_table = 'lessons'
        verbose_name_plural = 'lessons'


class Test(models.Model):
    text = models.CharField(max_length=500)
    module = models.ForeignKey(Modules, on_delete=models.CASCADE)

    class Meta:
        db_table = 'test'
        verbose_name_plural = 'test'


class Questions(models.Model):
    text = models.CharField(max_length=500)
    explanation = models.CharField(max_length=200)
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
    question = models.ForeignKey(Questions, on_delete=models.CASCADE)
    text = models.CharField(max_length=300)
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
    completed_test = models.ForeignKey(CompletedTests, on_delete=models.CASCADE)
    question = models.ForeignKey(Questions, on_delete=models.CASCADE)
    is_right = models.BooleanField(default=False)

    class Meta:
        db_table = 'completed_questions'
        verbose_name_plural = 'completed questions'


class SelectedAnswers(models.Model):
    completed_question = models.ForeignKey(CompletedQuestions, on_delete=models.CASCADE)
    answer = models.ForeignKey(Answers, on_delete=models.CASCADE)

    class Meta:
        db_table = 'selected_answers'
        verbose_name_plural = 'selected answers'
