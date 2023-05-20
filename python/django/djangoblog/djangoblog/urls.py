from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path("admin/", admin.site.urls),
    path("articles/", include("articles.urls")),
    path("about/", views.about),  # link,view
    path("", views.homepage),  # link,view
]
