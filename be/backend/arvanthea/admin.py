from dataclasses import fields
from django.contrib import admin
from .models import User, Product

# Register your models here.


# class userAdmin(admin.ModelAdmin):
#     list_display = ('first_name', 'middle_name', 'last_name',
#                     'email', 'address', 'birth_date', 'contact_number', 'sex', )

admin.site.register((User, Product))


class ProductAdmin(admin.ModelAdmin):
    list_display = ['product', 'product_name',
                    'product_description', 'product_quantity']
