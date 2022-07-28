from django.db import models
from django.utils import timezone

class File(models.Model):
    file = models.FileField(blank=False, null=False)
    url = models.TextField(default="")
    date = models.DateTimeField(default=timezone.now)
    def __str__(self):
        return self.file.name