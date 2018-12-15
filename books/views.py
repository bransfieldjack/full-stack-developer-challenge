from django.shortcuts import render
from rest_framework import viewsets
from .models import Books
from .serializers import BooksSerializer


class BooksView(viewsets.ModelViewSet): #Inheriting the modelviewset will take care of PUT/GET functionality, no need to explicitly define. 
    queryset = 
    serializer_class = 
    
    
    
