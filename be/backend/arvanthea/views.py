from django.shortcuts import render
from django.contrib.auth import login
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework import generics, permissions
from .serializers import RegisterSerializer, UserSerializer, LoginSerializer, ProductSerializer, FeedbackSerializer, PackageSerializer
from knox.models import AuthToken
from knox.auth import TokenAuthentication
from knox.views import LoginView as KnoxLoginView
from .models import Package, Product, User, Feedback
from . import serializers
from django.contrib.auth.decorators import login_required
from django.views.generic import (
    DeleteView
)
from rest_framework import viewsets
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin


class UserDetailAPI(viewsets.ModelViewSet):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    get_queryset = User.objects.all
    serializer_class = UserSerializer


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    permission_classes = (permissions.AllowAny,)
    http_method_names = ['get', 'head', 'post']

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

    def get(self, request, format=None):
        users = User.objects.all()
        serializer = RegisterSerializer(users, many=True)
        return Response(serializer.data)

    queryset = User.objects.all()


class LoginAPI(KnoxLoginView):
    serializer_class = LoginSerializer
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (TokenAuthentication,)

    def post(self, request, format=None):
        serializer = serializers.LoginSerializer(data=self.request.data,
                                                 context={'request': self.request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        data_user = User.objects.filter(
            id=user.id).values('id', 'username', 'first_name', 'middle_name','last_name', 'address', 'contact_number', 'email', 'birth_date')
        login(request, user)
        return Response({"user": data_user,
                         "token": AuthToken.objects.create(user)[1]})


class ProductCreateView(LoginRequiredMixin, APIView):
    model = Product
    fields = ['title', 'image', 'description', 'price', 'pieces', 'slug']

    def form_valid(self, form):
        form.instance.created_by = self.request.user
        return super().form_valid(form)


class ProductUpdateView(LoginRequiredMixin, UserPassesTestMixin, APIView):
    model = Product
    fields = ['id', 'title', 'image', 'description', 'price', 'pieces', 'slug']

    def get_object(self, request, *args, **kwargs):
        pk = self.kwargs.get('pk')
        product = request.data.get('foods')
        serializer = RegisterSerializer(product)
        return Response(serializer.data)

    def form_valid(self, form):
        form.instance.created_by = self.request.user
        return super().form_valid(form)

    def test_func(self):
        product = self.get_object()
        if self.request.user == product.created_by:
            return True
        return False


class ProductDeleteView(LoginRequiredMixin, UserPassesTestMixin, DeleteView):
    model = Product
    success_url = '/product_list'

    def test_func(self):
        item = self.get_object()
        if self.request.user == item.created_by:
            return True
        return False


class ProductView(viewsets.ModelViewSet):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.AllowAny,)
    get_queryset = Product.objects.all
    serializer_class = ProductSerializer

    @ login_required
    def product_list(request):
        products = Product.objects.filter(created_by=request.user)
        context = {
            'products': products
        }
        return render(request, context)

class FeedbackView (viewsets.ModelViewSet):
    get_queryset = Feedback.objects.all
    serializer_class = FeedbackSerializer


class PackageView(viewsets.ModelViewSet):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.AllowAny,)
    get_queryset = Package.objects.all
    serializer_class = PackageSerializer

    @ login_required
    def product_list(request):
        packages = Package.objects.filter(created_by=request.user)
        context = {
            'package': packages
        }
        return render(request, context)
