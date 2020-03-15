from django.conf.urls import url
from django.contrib import admin
from django.contrib.auth import views
from .views import signup

urlpatterns = [
    url(r'^login/$', views.auth_login, name='login'),
    url(r'^logout/$', views.auth_logout, name='logout'),
    url(r'^admin/', admin.site.urls),
    url('', signup, name='signup'),
]