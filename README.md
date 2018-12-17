# full-stack-developer-challenge

![Django Banner](https://s3-ap-southeast-2.amazonaws.com/info-exchange-test/django.jpeg)

![Build Status](https://travis-ci.org/bransfieldjack/full-stack-developer-challenge.svg?branch=master)

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

- [React v16](https://reactjs.org/blog/2017/09/26/react-v16.0.html)

- [Bootstrap 4](https://getbootstrap.com/)

- [Postman API Development](https://www.getpostman.com/)

- [Travis CI](https://travis-ci.org/)

- [Azure DevOps](https://azure.microsoft.com/en-au/services/devops/)

- [Node v6.11.2](https://nodejs.org/en/blog/release/v6.11.2/)

- [NPM v3.10.10](https://www.npmjs.com/package/npm/v/3.10.10)


## Testing

CI/CD builds verified using Travis, .travis.yml file for integration with Travis and github. 
CI/CD builds configured with Azure DevOps, all builds passing.

Postman was used for API functionality testing, along with the built in Django Api Root dashboard. 

Tests executed using the following command:

 - python3 manage.py test

### Initial test:

```
from django.test import TestCase

# Create your tests here.
class TestDjango(TestCase):
    
    
    def test_is_this_thing_on(self):
        self.assertEqual(1, 0)
```
### View test:
```
from django.test import TestCase


class TestViews(TestCase):
    
    
    def test_get_home_page(self):
        page = self.client.get("/")
        self.assertEqual(page.status_code, 200)
```
### Model test:
```
from django.test import TestCase
from .models import Author

class TestModels(TestCase):
    
    
    def test_done_defaults_to_false(self):
        item = Author(id=1)
        item.save()
        self.assertEqual(Author.id, 1)
        self.assertEqual(Author.done, False)
```
![Azure Pipelines build successful](https://s3-ap-southeast-2.amazonaws.com/info-exchange-test/azure_pipelines_build_succeed.PNG)
![Travis build successful](https://s3-ap-southeast-2.amazonaws.com/info-exchange-test/travis_build_succeed.PNG)

## Deployment

This app has been deployed to one of Herokus free dyno's.
Heroku is a cloud application hosting platform, which automates a much of the environment configuration from the command line. 

To push your code to heroku:

- heroku login 
- heroku git:remote -a info-exchange-app
- git commit
- git push heroku master

App configuration:

- heroku config:set DISABLE_COLLECTSTATIC=1 (This turns off the collection for any static files. )
- echo web: gunicorn info-exchange-app.wsgi:application > Procfile (The procfile is the entry point for our app. We tell heroku that this will be a web app using the gunicorn server. )
- commit changes
- push changes to both the git and heroku repo's
- update allowed hosts with the heroku url (https://info-exchange-app.herokuapp.com/)
- 
- Add the environment variables: os.environ.get('C9_HOSTNAME') & os.environ.get('HOSTNAME')
- Add the heroku add-on for postgresql: heroku addons:create heroku-postgresql:hobby-dev
- Install: sudo pip3 install psycopg2 (Driver for connecting to the postgresql database on heroku)
- Install the following to connect to the postgresql database on heroku: sudo pip3 install dj_database_url
- Run pip3 freeze --local > requirements.txt to update the requirements file for heroku. 
- Run heroku config, from bash to verify the environment variables on the heroku environment. 
- Go to the settings.py file and comment out the existing (local) database configuration strings. 
- 