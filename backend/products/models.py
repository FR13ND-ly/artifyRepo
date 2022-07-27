from django.db import models
from django.utils import timezone

class Product(models.Model):
    user = models.TextField()
    name = models.TextField()
    description = models.TextField()
    price = models.TextField()
    image = models.PositiveIntegerField()

class SavedProduct(models.Model):
    product = models.PositiveIntegerField()
    user = models.TextField()
    date = models.DateTimeField(default=timezone.now)
