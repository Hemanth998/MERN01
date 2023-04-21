# How i Built this

- create backend directory, inside it create server.js

- in the root, npm init which creates package.json

- create a .gitignore file, include node_modules and .env file in it

- install dependencies express, dotenv, mongoose, colors

- install a devDependency nodemon

- set up start and server scripts with the commands node and nodemon respectively, argument is backend/server.js

- create a .env file in root, give NODE_ENV and PORT arguments

- set up server and create a sample route

- create a git repo in github and commit and push your code

- Command - git init, git add ., git commmit -m "Initial Commit", git push -u origin main

- create the first route

- Test in POSTMAN

- Create the routes direcotry inside backend directory, create the goalRoutes file, redirect the goal related routes to this file using app.use, and set up all the CRUD endpoints for Goals and test them in POSTMAN

- Refactor, put the callback functions in the controllers folder

- Test all the routes

- refactor the routes to chain them, test it

- Now, for post request, send the text field in the body and validate it, to not be empty plainly

- use express json and urlencoded middlewares

- understand express error handler - understood

- Implement express custom error handler middleware
