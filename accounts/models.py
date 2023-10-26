from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    full_name = models.CharField(max_length=255)
    phone_number = models.CharField(null=True)
    email = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    education_class = models.CharField(max_length=255)
    coins = models.IntegerField(default=0)
