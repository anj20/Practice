from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=100)  # title
    slug = models.SlugField()  # slug
    body = models.TextField()  # body
    date = models.DateTimeField(auto_now_add=True)  # date
    thumb = models.ImageField(default="default.png", blank=True)  # thumb
    author = models.ForeignKey(User, default=None, on_delete=models.CASCADE)  # author

    # python manage.py makemigrations
    # python manage.py migrate

    def __str__(self):
        return self.title

    def snippet(self):
        return self.body[:50] + "..."
