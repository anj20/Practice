from django.urls import path
from . import views

urlpatterns = [
    path("", views.article_list, name="list"),  # link,view
    path("<slug:slug>/", views.articles_detail, name="detail"),
]
