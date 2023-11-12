from django.contrib import admin
from .models import *

admin.site.register(Courses)
admin.site.register(UserCourse)
admin.site.register(Modules)
admin.site.register(Lessons)
admin.site.register(CompletedLessons)
admin.site.register(Test)
admin.site.register(Questions)
admin.site.register(CompletedQuestions)

