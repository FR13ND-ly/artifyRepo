from django.db import models
from django.utils import timezone

class Like(models.Model):
    product = models.PositiveIntegerField(null=True)
    user = models.TextField(null=True)
    date = models.DateTimeField(default=timezone.now)