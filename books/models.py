from django.db import models


class Books(models.Model):
    name = models.CharField(max_length=50)
    isbn = models.CharField(max_length=50)
    author = models.CharField(max_length=50)
    
    
    def __str__(self):
        return self.name    # Allows us to see the item name in the admin dashboard. 