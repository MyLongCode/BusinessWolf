from django.db import models

from accounts.models import User


class Courses(models.Model):
    users = models.ManyToManyField(User, through="UserCourse")
    course_name = models.CharField(max_length=100)
    about_course = models.CharField(max_length=100)


class UserCourse(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    course = models.ForeignKey(Courses, on_delete=models.CASCADE)


class Modules(models.Model):
    module_id = models.IntegerField(primary_key=True)
    course_id = models.ForeignKey(Courses, on_delete=models.CASCADE)
    module_number = models.IntegerField()


class Lessons(models.Model):
    lesson_id = models.IntegerField(primary_key=True)
    module_id = models.ForeignKey(Modules, on_delete=models.CASCADE)
    lesson_number = models.IntegerField()


class Question(models.Model):
    users = models.ManyToManyField(User, through='CompletedQuestions')
    question_id = models.IntegerField(primary_key=True)
    lesson_id = models.ForeignKey(Lessons, on_delete=models.CASCADE)
    question_text = models.CharField(max_length=500)
    true_answer = models.CharField(max_length=300)
    false_answer_1 = models.CharField(max_length=300)
    false_answer_2 = models.CharField(max_length=300)
    false_answer_3 = models.CharField(max_length=300)


class CompletedQuestions(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)


