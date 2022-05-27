# Bare Koa Web Server
A basic scaffold/skeleton to create a Node.JS Service-oriented web server.

## Architecture
* Controllers receive incoming client requests, and they leverage services
* Services contain all business logic, and can also make calls to the data access layer
* The data access layer interacts with the database by performing queries
* Results are passed back up to the service layer
* The service layer can then hand everything back to the controller
* The controller can then respond to the client

## Controllers
* Should never contain business logic!

## Services
* Contain business logic
* Leverage the data access layer to interact with the database
* Be framework agnostic

## Loaders
* Abstract all of our application startup processes into specific modules

## References
* [Node Service-oriented Architecture](https://www.codementor.io/@evanbechtol/node-service-oriented-architecture-12vjt9zs9i)
