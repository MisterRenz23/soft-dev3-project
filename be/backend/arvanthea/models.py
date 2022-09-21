
from pyexpat import model
from django.db import models
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField
from django.contrib.auth.models import PermissionsMixin

# Create your models here.


class User(AbstractUser, PermissionsMixin):

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


class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product_name = models.TextField()
    product_price = models.DecimalField(max_digits=5, decimal_places=2)
    product_quantity = models.IntegerField()

    def __str__(self):
        return str(self.product_name) + ": ₱" + str(self.product_price) + ":" + str(self.product_quantity)


class Order(models.Model):
    order = models.ForeignKey(Product, on_delete=models.CASCADE)
    username = models.CharField(max_length=50)
    product_name = models.TextField()
    quantity_per_prod = models.IntegerField()
    price_prod_subtotal = models.IntegerField()
    date_purchased = models.DateTimeField()


class Payment(models.Model):
    payment = models.ForeignKey(Order, on_delete=models.CASCADE)
    amount_to_pay = models.FloatField()
    payment_type = models.CharField(max_length=50)
