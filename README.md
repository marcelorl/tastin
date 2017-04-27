# tastin

[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)

### Overview
API Backend application for Tastin client.

### It allows you to:
  - Search for Restaurants around the current position of the client;
  - Search for Restaurant's Reviews; 
  - Create review for restaurants.
  
### Technologies:
  - Express server
  - Sequelize ORM
    - SQlite (dev)
    - Mysql (prod)
  - Swagger (dev)
  - Semi-standard lint
  
### API documentation
    http://localhost:3001/api-docs.
  
### Commands:
  #### Installation:
    cp .env.example .env
    yarn
    yarn migrate
  #### Development:
    yarn server
    yarn lint
  #### Deploy
    Comming soon ...
