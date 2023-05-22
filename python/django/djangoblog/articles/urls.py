from django.urls import path
from . import views

urlpatterns = [
    path("", views.article_list, name="list"),  # link,view
    path("create/", views.article_create, name="create"),
    path("<slug:slug>/", views.articles_detail, name="detail"),
]
