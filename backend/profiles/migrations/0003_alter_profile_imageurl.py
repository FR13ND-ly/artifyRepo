# Generated by Django 4.0.6 on 2022-07-27 20:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0002_alter_profile_imageurl'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='imageUrl',
            field=models.TextField(),
        ),
    ]