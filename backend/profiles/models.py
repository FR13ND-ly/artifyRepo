from django.db import models
from django.utils import timezone

class Profile(models.Model):
    token = models.TextField()
    date = models.DateTimeField(default=timezone.now)
    imageUrl = models.TextField()
    username = models.TextField(default="John Doe")

    def __str__(self):
        return self.username