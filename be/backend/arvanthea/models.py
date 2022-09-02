
from pyexpat import model
from django.db import models
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.


class User(AbstractUser):

    first_name = models.CharField(max_length=50)
    middle_name = models.CharField(max_length=50, null=True, blank=True)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=50, unique=True)
    address = models.CharField(max_length=50)
    birth_date = models.DateField(null=True, blank=True)
    contact_number = PhoneNumberField(
        blank=True, help_text='Contact phone number')
    sex = models.CharField(max_length=6, null=True, blank=True)


class RegisteredUser(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
