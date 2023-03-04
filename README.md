# Simple Agenda

This is a simple agenda project developed with NodeJS, Docker and MySQL.

## Features

 - Create, Read, Update, and Delete contacts
 - Search contacts by name, phone Number and email.
 - List all contacts

    
## Technologies & Requirements

This project was developed with the following technologies:

 - Node v19.7.0
    - express 4.18
    - mysql 2.18
    - Body Parser 
 - MySQL
 - Docker 20.10.12

## Install Simple Agenda

Clone Repo.

    $ git clone https://github.com/engleovictor/simple-agenda

    $ cd ./simple-agenda/

Install Docker and NodeJS.

    $ sudo apt install docker-compose docker.io nodejs

I highly recomend to use nodeenv.

    $ pip install nodeenv

    $ nodeenv simple-agenda-env

    $ source simple-agenda-env/bin/active

Then, install dependencies.

    $ npm install

Start new docker with docker-compose.

    $ cd ./MySQLServer/

    $ sudo docker-compose up

You must create a table (usersData) and 4 columns (id, name, email, phone number).

Finally:

    $ cd ..

    $ node backend/server.js

Acess: http://localhost:3000/