"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import include
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from arvanthea.views import RegisterAPI, LoginAPI, UserDetailAPI, ProductView, ProductCreateView, ProductDeleteView, ProductUpdateView, FeedbackView, PackageView
from rest_framework import routers

route = routers.DefaultRouter()
route.register("product_list", ProductView, basename='productview')
route.register("package_list", PackageView, basename='packageview')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('user/register', RegisterAPI.as_view()),
    path('user/login', LoginAPI.as_view()),
    path('user/profile', UserDetailAPI.as_view()),
    path('user/', include(route.urls)),
    path('user/product/new/', ProductCreateView.as_view(), name='product-create'),
    path('user/product-update/<slug>/',
         ProductUpdateView.as_view(), name='product-update'),
    path('user/product-delete/<slug>/',
         ProductDeleteView.as_view(), name='product-delete'),
    path('user/feedback', FeedbackView.as_view({
         'get': 'list', 'post': 'create'
         })),

]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
