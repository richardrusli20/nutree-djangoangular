# Generated by Django 3.0.4 on 2020-04-13 10:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0005_orderitem'),
    ]

    operations = [
        migrations.DeleteModel(
            name='OrderItem',
        ),
    ]
