# tastin

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
  It is allowed only in development environment:
    - Access http://localhost:3001/api-docs/ to reach it.
  
### Commands:
  #### Installation:
    - cp .env.example .env
    - yarn
    - yarn migrate
  #### Development:
    - yarn server
    - yarn lint
  #### Deploy
    - Comming soon ...
