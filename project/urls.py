
from re import template
from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import views

# add Static file config
from django.contrib.staticfiles.urls import static, staticfiles_urlpatterns

from . import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('app.urls')),
    path('login/', views.LoginView.as_view(template_name='sign-in.html'), name='login'),
    path('logout/', views.LogoutView.as_view(template_name='logout.html'), name='logout'),
]

# static
urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
