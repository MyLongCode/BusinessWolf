from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    pass


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    full_name = models.CharField(max_length=255)
    phone_number = models.IntegerField()
    email = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    education_class = models.CharField(max_length=255)
    coins = models.IntegerField()
