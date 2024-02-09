# Todo

To-do list made with the MERN stack (MongoDB/Express/React/Node). The app contains client side (this application) and [server side](https://github.com/da6ko/to-do-app-server)

## How to start

1. Clone the Repository
```bash
  git clone https://github.com/da6ko/to-do-app-client.git
  cd to-do-app-client
```

2. Start the server side code (https://github.com/da6ko/to-do-app-server)

Before starting the client-side, make sure to start the server-side application. Follow the instructions in the Todo App Server repository to set up and run the server.

3. Install Dependencies

```bash
npm install
```
This command installs the necessary dependencies for the client-side application.

4. Configure MongoDB Atlas
Make sure to configure your MongoDB Atlas connection in the server-side code. Replace the connection string in server.js with your actual MongoDB Atlas connection string.
5. Start the Client-Side Application

```bash
  npm start
```

# Features
Add Todo: Enter a new todo in the input field and click "Add" to add it to the list.

Edit Todo: Click the "Edit" button on a todo to edit its text and date.

Remove Todo: Click the "Remove" button on a todo to delete it from the list.

# Technologies Used
MongoDB: Database for storing todos.

Express: Backend framework for handling server-side logic.

React: Frontend library for building user interfaces.

Node.js: JavaScript runtime for server-side development.

# Folder Structure
src: Contains the client-side React application.
components: React components for rendering different parts of the application.
Css: Stylesheets for styling the components.
App.js: Main application component.
index.js: Entry point for the React application.
