from dataclasses import fields
from django.contrib import admin
from .models import User, Product, CartItems, Feedback


class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'first_name', 'middle_name',
                    'last_name', 'email', 'address', 'birth_date', 'contact_number', 'sex')


class ProductAdmin(admin.ModelAdmin):
    fieldsets = [
        ("Created By", {'fields': ["created_by"]}),
        ("Title", {'fields': ["title"]}),
        ("Image", {'fields': ["image"]}),
        ("Description", {'fields': ["description"]}),
        ("Price", {'fields': ["price"]}),
        ("Pieces", {'fields': ["pieces"]}),
        ("Slug", {'fields': ["slug"]}),
    ]
    list_display = ('id', 'created_by', 'title',
                    'description', 'price')


class CartItemsAdmin(admin.ModelAdmin):
    fieldsets = [
        ("Order Status", {'fields': ["status"]}),
        ("Delivery Date", {'fields': ["delivery_date"]})

    ]
    list_display = ('id', 'user', 'product', 'quantity', 'ordered',
                    'ordered_date', 'delivery_date', 'status')
    list_filter = ('ordered', 'ordered_date', 'status')


# class FeedbackAdmin(admin.ModelAdmin):
#     fieldsets = ('feedback')


admin.site.register(User, UserAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(CartItems, CartItemsAdmin)
admin.site.register(Feedback)
