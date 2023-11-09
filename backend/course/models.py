from django.db import models

from accounts.models import User


class Courses(models.Model):
    course_name = models.CharField(max_length=100)
    about_course = models.CharField(max_length=100)

    class Meta:
        db_table = 'courses'


class UserCourse(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    course = models.ForeignKey(Courses, on_delete=models.CASCADE)

    class Meta:
        db_table = 'user_courses'


class Modules(models.Model):
    course = models.ForeignKey(Courses, on_delete=models.CASCADE)
    number = models.IntegerField()

    class Meta:
        db_table = 'modules'


class Lessons(models.Model):
    module = models.ForeignKey(Modules, on_delete=models.CASCADE)
    number = models.IntegerField()
    chat_text = models.CharField(max_length=300)
    abstract_text = models.CharField(max_length=300)

    class Meta:
        db_table = 'lessons'


class Test(models.Model):
    text = models.CharField(max_length=500)
    lesson = models.ForeignKey(Lessons, on_delete=models.CASCADE)

    class Meta:
        db_table = 'test'


class Questions(models.Model):
    text = models.CharField(max_length=500)
    explanation = models.CharField(max_length=200)
    answers = models.CharField(max_length=300)
    test = models.ForeignKey(Test, on_delete=models.CASCADE)

    class Meta:
        db_table = 'questions'


class CompletedQuestions(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    question = models.ForeignKey(Questions, on_delete=models.CASCADE)

    class Meta:
        db_table = 'user_completed_questions'


class CompletedLessons(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    lesson = models.ForeignKey(Lessons, on_delete=models.CASCADE)

    class Meta:
        db_table = 'user_completed_lessons'
