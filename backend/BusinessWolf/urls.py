from django.contrib import admin
from django.urls import path, include

from course.urls import urlpatterns
from accounts.views import *

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', UserAPICreateView.as_view()),
    path('api/users/<int:pk>/', UserAPIDetail.as_view()),
    path('api/users/changepassword/<int:pk>/', ChangePasswordUserAPIDetail.as_view(), name='change_password'),
    path('api/drf-auth/', include('rest_framework.urls')),
    path('auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('', include(urlpatterns)),
]
