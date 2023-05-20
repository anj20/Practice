from django.db import models


# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=100)  # title
    slug = models.SlugField()  # slug
    body = models.TextField()  # body
    date = models.DateTimeField(auto_now_add=True)  # date
    # add in thumbnail later
    # add in author later

    # python manage.py makemigrations
    # python manage.py migrate

    def __str__(self):
        return self.title
