# World Wrestling Database API

This is a basic API for demonstrating the use of Postman.
It's very simple, and probably quite brittle.

It's built on mongodb and express.

These are instructions for Mac, but probably fairly similar for Windows

## Running the API server
### Install and run mongodb
https://docs.mongodb.com/manual/installation/

> mongod

### Install relevant dependencies (if you haven't already)

> npm install

### Start the API server

> npm run start

## Test using Postman
### Install Postman
https://getpostman.com

Open Postman and try running some API calls. The available calls are:
* GET /wrestlers
Get a list of all wrestlers in our DB
* POST /wrestlers
Create a new wrestler
* GET /wrestlers/:id
Get information on a single wrestler
* PUT /wrestlers/:id
Update information on a single wrestler
* DELETE /wrestlers/:id
Delete a wrestler

An example of the API body for POST and PUT:
<pre>
{
    "name": “Andre the Giant",
    "realname": “Andre Rene Roussimoff",
    "birthdate": “May 19, 1946”,
    "specialmove": “Double underhook suplex",
    "hometown": “Molien, France",
    "bio": "André René Roussimoff (May 19, 1946 – January 27, 1993), best known as André the Giant, was a French professional wrestler and actor."
}
</pre>

`Name` must be an alphanumeric string, `realname` and `specialmove` are both required fields