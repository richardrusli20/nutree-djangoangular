# Generated by Django 3.0.4 on 2020-04-03 08:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customer', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customer',
            name='customer_email',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
    ]
