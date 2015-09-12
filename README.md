# # Djangular Boilerplate

Django and Angular along with workflow tools like npm, gulp, bower, and jade.


## Requirements

* Pip
* Virtual Env
* Postgresql
* NPM
* Gulp
* Bower

#### Install Pip
```
$ sudo easy_install pip
```

#### Install Virtual Env
```
$ pip install virtualenv
```

#### Install Postgresql
http://www.postgresql.org/download/macosx/
* Download Postgres.app
* Install and Run


#### Install NPM
http://nodejs.org/
* Install 

#### Install Node Dependencies
```
$ sudo npm install gulp -g
$ sudo npm install bower -g
```

## Project Setup

### Create Virtual Environment
```
$ cd ~/
$ mkdir envs
$ cd envs
virtualenv lifestail
$ cd lifestail
```

### Clone Repo into ~/envs/__ProjectName__/app
```
$ cd ~/envs/
$ mkdir __ProjectName__
$ cd __ProjectName__
$ git clone https://github.com/theyoungastros/djangular-boilerplate app
```

### Frontend Setup
```
$ cd ~/envs/__ProjectName__/app
$ npm install
$ bower install
$ gulp build
```

## Setup Database

### Configure Local Settings
```
$ vi ~/envs/__ProjectName__/app/boiler/settings.py
```

Replace database settings with the following:
```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'DATABASE_NAME',
        'USER': '*YOUR_USERNAME*',
        'PASSWORD': '',
        'HOST': 'localhost',
        'PORT': '5432',
    },
}
```

### Edit ~/envs/lifestail/bin/activate
Replace the following:

```
PATH="$VIRTUAL_ENV/bin:$PATH"
export PATH
```
with:
```
PATH="$VIRTUAL_ENV/bin:$PATH"
PATH="/Applications/Postgres.app/Contents/Versions/9.4/bin:$PATH"
export PATH
```


### Migrate DB & Run Server
```
$ cd ~/envs/__ProjectName__/
$ source bin/activate
$ cd app
$ pip install -r requirements.txt
$ psql 
$ > create database DATABASE_NAME;
$ > \q
$ python boiler/manage.py migrate
$ python boiler/manage.py createsuperuser

# follow prompts
$ python app/lifestail/manage.py runserver
```

http://localhost:8000/admin



