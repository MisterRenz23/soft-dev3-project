from .models import User
from rest_framework import serializers


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
        )

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
