from django.test import TestCase
from .models import Author

class TestModels(TestCase):
    
    
    def test_done_defaults_to_false(self):
        item = Author(id=1)
        item.save()
        self.assertEqual(Author.id, 1)
        self.assertEqual(Author.done, False)