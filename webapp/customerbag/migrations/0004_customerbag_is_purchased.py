# Generated by Django 3.0.4 on 2020-04-12 17:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customerbag', '0003_customerbag_total_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='customerbag',
            name='is_purchased',
            field=models.BooleanField(default=False),
        ),
    ]
