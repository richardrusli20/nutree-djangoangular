# Generated by Django 3.0.4 on 2020-04-17 17:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customer', '0014_remove_customer_customer_phone'),
    ]

    operations = [
        migrations.AddField(
            model_name='customer',
            name='customer_phone',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
    ]
