# Generated by Django 3.0.4 on 2020-04-17 17:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customer', '0010_auto_20200417_1908'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='customer_phone',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
    ]
