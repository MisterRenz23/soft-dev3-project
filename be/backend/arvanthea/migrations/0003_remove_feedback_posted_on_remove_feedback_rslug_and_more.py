# Generated by Django 4.0.7 on 2022-09-27 03:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('arvanthea', '0002_order_product_payment_order_order_feedback_cartitems'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='feedback',
            name='posted_on',
        ),
        migrations.RemoveField(
            model_name='feedback',
            name='rslug',
        ),
        migrations.RemoveField(
            model_name='feedback',
            name='user',
        ),
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(upload_to='images/'),
        ),
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=6),
        ),
    ]
