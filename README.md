# Jobly

An application inspired by LinkedIn.
Jobly has many similar functionalites as LinkedIn such as the following: 
 - create/edit a profile
 - create/edit a job listing
 - explore job listings by criteria
 - post a job listing
 - apply to a job listing

## Getting Started

### Requirements

- Node.js
- PostgreSQL

Clone this repo and follow the installation instructions below to run the application on your local machine.

Note, this repo contains both a front-end and back-end as two separate applications that should be ran simultaneously.

### Setting up the server

Install dependencies for the back-end and create and seed a database locally

```
$ cd backend
$ npm install
$ createdb jobly
$ createdb jobly-test
$ psql jobly < data.sql
$ psql jobly-test < data.sql
$ npm start
```

### Setting up the client

Install dependencies and start up the front-end

```
$ cd frontend
$ npm install
$ npm start`
```

### Running Tests

### Testing the server

Create and seed a test database locally
```
$ cd backend
$ createdb jobly-test
$ psql jobly-test < seed.py
```

Change the node environment from development to test

```
$ export NODE_ENV=production
```

Run all tests (unit and integration)

```
$ jest
```

To run a specific test file
```
$ jest [filename.js]
```


## Technologies 
- React
- Node.js/Express
- Redux
- PostgreSQL
- Bootstrap
- Jest
- Axios
- BCrypt
