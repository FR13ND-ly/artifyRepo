# Generated by Django 4.0.6 on 2022-07-27 19:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='imageUrl',
            field=models.TextField(default=1),
        ),
    ]
