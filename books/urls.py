from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter() # Default router to route our views. 
router.register('books', views.BooksView) # Registers our view/endpoint. 
router.register('books_view', views.BooksView)

urlpatterns = [
    path('', include(router.urls)) # Generates the urls and calls them using the router. 
]
