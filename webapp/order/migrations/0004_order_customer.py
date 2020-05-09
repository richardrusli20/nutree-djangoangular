# Generated by Django 3.0.4 on 2020-04-12 18:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('customer', '0002_customer_customer_email'),
        ('order', '0003_auto_20200412_1751'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='customer',
            field=models.ForeignKey(default=3, on_delete=django.db.models.deletion.CASCADE, to='customer.Customer'),
            preserve_default=False,
        ),
    ]
