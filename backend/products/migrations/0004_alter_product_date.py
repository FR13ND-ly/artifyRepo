# Generated by Django 4.0.6 on 2022-07-28 00:17

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_product_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2022, 7, 28, 0, 17, 16, 22310, tzinfo=utc)),
        ),
    ]