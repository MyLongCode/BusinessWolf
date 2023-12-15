from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User


class MyUserAdmin(UserAdmin):

    fieldsets = (
            (None, {'fields': ('full_name', 'coins', 'education_class',)}),
    ) + UserAdmin.fieldsets


admin.site.register(User, MyUserAdmin)
