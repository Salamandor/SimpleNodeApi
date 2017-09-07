# SimpleNodeApi
A simple node api, uses Mongodb and Mongoose 4.10.8 (later version of Mongoose won't run due to a bug)

Requires mongodb to be running, currently pointed at a "db" directory which needs to exist in the project's root directory.

Calls:

Get all names
GET http://localhost:3000/users

Get name by ID
GET http://localhost:3000/users/{ID}

Create a name
POST http://localhost:3000/users
Body:
x-www-form-urlencoded
name: [yourname]

Update a name 
PUT http://localhost:3000/users/{ID}

Delete a name
DELETE http://localhost:3000/users/{ID}
