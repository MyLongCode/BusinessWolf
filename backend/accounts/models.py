from django.contrib.auth.base_user import BaseUserManager
from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    full_name = models.CharField(max_length=255)
    phone = models.CharField(null=True)
    email = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    education_class = models.CharField(max_length=255)
    coins = models.IntegerField(default=0)
    avatar = models.CharField(max_length=255)
    role = models.CharField(max_length=255)

    class Meta:
        db_table = 'users'

