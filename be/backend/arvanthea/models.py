from decimal import Decimal
from pyexpat import model
from django.db import models
from django.shortcuts import reverse
from django.utils import timezone
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
    title = models.CharField(max_length=150)
    description = models.CharField(max_length=250, blank=True)
    price = models.DecimalField(decimal_places=2, max_digits=6)
    pieces = models.IntegerField()
    image = models.ImageField(upload_to='images/', null=False, blank=False)
    slug = models.SlugField(default="foods")
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("main:dishes", kwargs={
            'slug': self.slug
        })

    def get_add_to_cart_url(self):
        return reverse("main:add-to-cart", kwargs={
            'slug': self.slug
        })

    def get_item_delete_url(self):
        return reverse("main:product-delete", kwargs={
            'slug': self.slug
        })

    def get_update_item_url(self):
        return reverse("main:product-update", kwargs={
            'slug': self.slug
        })


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


class Feedback(models.Model):
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    # rslug = models.SlugField()
    feedback = models.TextField()
    # posted_on = models.DateField(default=timezone.now)

    class Meta:
        verbose_name = 'Feedback'
        verbose_name_plural = 'Feedbacks'

    def __str__(self):
        return self.feedback


class CartItems(models.Model):
    ORDER_STATUS = (
        ('Active', 'Active'),
        ('Delivered', 'Delivered')
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    ordered = models.BooleanField(default=False)
    quantity = models.IntegerField(default=1)
    ordered_date = models.DateField(default=timezone.now)
    status = models.CharField(
        max_length=20, choices=ORDER_STATUS, default='Active')
    delivery_date = models.DateField(default=timezone.now)

    class Meta:
        verbose_name = 'Cart Item'
        verbose_name_plural = 'Cart Items'

    def __str__(self):
        return self.item.title

    def get_remove_from_cart_url(self):
        return reverse("main:remove-from-cart", kwargs={
            'pk': self.pk
        })

    def update_status_url(self):
        return reverse("main:update_status", kwargs={
            'pk': self.pk
        })
