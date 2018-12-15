# full-stack-developer-challenge

![Django Banner](https://s3-ap-southeast-2.amazonaws.com/info-exchange-test/django.jpeg)

This is a small web application to manage a list of Books, required as per the Infoexchange technical exam. 
Each book has a name, ISBN, and an author. The test consists of two parts, a RESTful API as the backend and the Javascript based frontend application
 
## UX
 

## Features

### Apps:
 
 - Books app
 
### Existing Features

- GET /books/ - Returns a list of books in the database in JSON format
- GET /book/{{id}}/ - Returns a detail view of the specified book id. Nest author details in JSON format
- GET /authors/ - Returns a list of authors in the database in JSON format
- GET /author/{{id}}/ - Returns a detail view of the specified author id
- POST /author/ - Creates a new author with the specified details - Expects a JSON body
- POST /book/ - Creates a new book with the specified details - Expects a JSON body
- PUT /author/{{id}} - Updates an existing author - Expects a JSON body
- PUT /book/{{id}} - Updates an existing book - Expects a JSON body

### Features Left to Implement
- Optional additional features could include login/auth functionality and stripe payments. 

## Technologies Used

- [Django 2.0](https://docs.djangoproject.com/en/2.1/releases/2.0/)

- [Django REST Framework](https://www.django-rest-framework.org/)

- [JQuery](https://jquery.com)

- [Bootstrap 4](https://getbootstrap.com/)

## Testing



## Deployment




## Credits

### Content

### Media

### Acknowledgements
