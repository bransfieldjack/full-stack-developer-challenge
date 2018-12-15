from django.shortcuts import render
from rest_framework import viewsets
from .models import Books, Author
from .serializers import BooksSerializer


class BooksView(viewsets.ModelViewSet): # Inheriting the modelviewset will take care of PUT/GET functionality, no need to explicitly define. 
    queryset = Books.objects.all() # Returns all info from the database, then the modelviewset will decide how to use the objects in a particular way. 
    serializer_class = BooksSerializer # The serilizer created for the Books app


class AuthorView(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer