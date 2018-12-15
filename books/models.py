from django.db import models


class Author(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

    def __str__(self):
        return self.last_name


class Books(models.Model):
    name = models.CharField(max_length=50)
    isbn = models.CharField(max_length=50)
    author = models.ForeignKey(Author, on_delete=models.CASCADE) # .Cascade tells Django to continue deleting, so extend that action to foreign keys. 
    
    def __str__(self):
        return self.name    # Allows us to see the item name in the admin dashboard. 