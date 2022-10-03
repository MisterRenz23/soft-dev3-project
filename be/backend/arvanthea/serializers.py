from .models import Package, Product, User, RegisteredUser, Feedback
from rest_framework import serializers
from django.contrib.auth import authenticate


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id',
            'first_name',
            'middle_name',
            'last_name',
            'address',
            'email',
            'username',
            'sex',
            'birth_date',
            'contact_number',
        )


class RegisterSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = (
            'id',
            'first_name',
            'middle_name',
            'last_name',
            'address',
            'email',
            'username',
            'sex',
            'birth_date',
            'contact_number',
            'password',
            'confirm_password',
        )
        extra_kwargs = {
            'password': {
                'write_only': True,
                'style': {'input_type': 'password'},
                'max_length': 50,
            },
            'confirm_password': {
                'write_only': True,
                'style': {'input_type': 'password'},
                'max_length': 50,
            },
        }

    def validate(self, attrs):
        if attrs['password'] != attrs['confirm_password']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."})
        return attrs

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            first_name=validated_data['first_name'],
            middle_name=validated_data['middle_name'],
            last_name=validated_data['last_name'],
            address=validated_data['address'],
            sex=validated_data['sex'],
            birth_date=validated_data['birth_date'],
            contact_number=validated_data['contact_number'],
            password=validated_data['password'],
        )
        return user


class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegisteredUser
        fields = ('id', 'username', 'password')
        extra_kwargs = {
            'password': {
                'write_only': True,
                'style': {'input_type': 'password'},
                'max_length': 50,
            },
            'username': {
                'max_length': 50,
                'help_text': None,
            }
        }

    def validate(self, attrs):
        username = attrs.get('username')
        password = attrs.get('password')

        if username and password:
            user = authenticate(request=self.context.get('request'),
                                username=username, password=password)
            if not user:
                msg = 'Access denied: wrong username or password.'
                raise serializers.ValidationError(msg, code='authorization')
        else:
            msg = 'Both "username" and "password" are required.'
            raise serializers.ValidationError(msg, code='authorization')
        attrs['user'] = user
        return attrs


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'title', 'image',
                  'description', 'price', 'pieces', 'slug']


class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ['feedback']


class PackageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Package
        fields = ['id', 'title',
                  'description', 'price', 'pieces', 'slug']
