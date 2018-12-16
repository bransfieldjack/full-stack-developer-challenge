from django.shortcuts import render
from rest_framework.renderers import TemplateHTMLRenderer, JSONRenderer
from django.http import HttpResponse
from rest_framework import viewsets
from .models import Books, Author
from .serializers import BooksSerializer, AuthorSerializer
from django.views import View


class BooksView(viewsets.ModelViewSet): # Inheriting the modelviewset will take care of PUT/GET functionality, no need to explicitly define. 
    
    
    queryset = Books.objects.all() # Returns all info from the database, then the modelviewset will decide how to use the objects in a particular way. 
    serializer_class = BooksSerializer # The serializer created for the Books app. 
    template_name = 'index.html'
    
    
    renderer_classes = (JSONRenderer, TemplateHTMLRenderer,)
    template_name = 'index.html'
    
    
    def index(self,request):
        queryset = Books.objects.all()
        template_name = 'index.html'
        return render(request, template_name, {'queryset':queryset})
        
        return render(template_name)
       

class AuthorView(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer

