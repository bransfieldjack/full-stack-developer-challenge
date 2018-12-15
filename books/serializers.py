from rest_framework import serializers
from .models import Books, Author


class BooksSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Books
        fields = ('id', 'url', 'name', 'isbn', 'author')
        
        
class AuthorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Author
        fields = ('id', 'url', 'first_name', 'last_name')