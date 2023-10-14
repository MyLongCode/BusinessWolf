from django.contrib import admin
from django.urls import path, include, re_path
from accounts.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', UserAPICreateView.as_view()),
    path('api/users/<int:pk>/', UserAPIDetail.as_view()),
    path('api/drf-auth/', include('rest_framework.urls')),
    path('api/auth/', include('djoser.urls')),
    re_path(r'^auth/', include('djoser.urls.authtoken')),
]
