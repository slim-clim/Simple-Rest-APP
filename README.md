# Simple-Rest-APP
Using Express Js and REST API principle
# Simple REST API with Express.js

## Project Overview
Data Module: Manages the initial data for tracks.Controller Module: Contains the logic for handling HTTP requests.
Route Module: Defines the routes for the API.
Main Application File: Sets up the Express server, middleware, and routes.
     
## Prerequisites
By following these steps, you should be able to create and run the provided code successfully:
Node.js and npm: Install Node.js and npm.
Project Structure: Set up the project directory structure.
Dependencies: Install the express package.
Files and Code: Create and populate the necessary files with the provided code.
Running the Server: Start the server and test the API endpoints.
     
## Installation & Setup Steps
Follow these steps to set up and run the project locally:

1. Download and Install Node.js:
    Go to the Node.js official website .
    Download the LTS (Long Term Support) version for your operating system.
    Follow the installation instructions for your OS.

2. Create a Project Directory:
    Open your terminal or command prompt. 
    Navigate to the location where you want to create your project. 
    Create a new directory for your project and navigate into it: 
    mkdir my-tracks-api
    cd my-tracks-api

3. Initialize a New npm Project:
    Run the following command to initialize a new npm project. This will create a package.json file: 
    npm init -y

4. Install Express:
    Run the following command to install the express package: 
    npm install i express

5. Create the Required Directories and Files:
    Create the following directory structure within your project directory: 
    my-tracks-api/
    ├── data/
    │   └── data.js
    ├── controllers/
    │   └── tracks.js
    ├── routes/
    │   └── tracks.js
    ├── app.js
    ├── package.json
    └── package-lock.json
6. Start the Server: 
    Navigate to your project directory in the terminal. 
    Run the following command to start the server: 
    npm start

7. Test the API:
    Test the API endpoints from the file 'route.rest' in the routes directory to access the following endpoints:
     GET http://localhost:5000/tracks
     GET http://localhost:5000/tracks/1
     POST http://localhost:5000/tracks with a JSON body like {"name": "New Track", "description": "New Description"}
     PUT http://localhost:5000/tracks/1 with a JSON body like {"name": "Updated Track", "description": "Updated Description"}
     DELETE http://localhost:5000/tracks/1
     
## Technologies Used

The provided code uses the following technologies: 
Node.js: 
    A JavaScript runtime built on Chrome's V8 JavaScript engine.
    Used to run JavaScript on the server side.   
  
npm (Node Package Manager): 
    A package manager for Node.js.
    Used to manage dependencies and run scripts.
         
Express.js: 
    A minimal and flexible Node.js web application framework.
    Provides a robust set of features for web and mobile applications.
    Used to create the web server and handle HTTP requests.
         
JavaScript: 
    The programming language used for writing the server-side logic.
    Used for defining routes, handling requests, and managing data.
         
RESTful API: 
    A architectural style for designing networked applications.
    Uses HTTP requests to perform CRUD (Create, Read, Update, Delete) operations.
    The code defines routes for handling these operations.
         
JSON (JavaScript Object Notation): 
    A lightweight data-interchange format.
    Used for sending and receiving data in the API.
         
Middleware: 
    Functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.
    Used for tasks like parsing request bodies, handling errors, and more.
         
Error Handling: 
    Techniques for handling errors in the application.
    Used to provide meaningful error messages and handle unexpected issues.
         
Local Data Storage: 
    The code uses an in-memory array to store track data.
    This is a simple approach for demonstration purposes and is not suitable for production environments where persistent storage is required.
        
## Project Structure
    my-tracks-api/
    ├── data/
    │   └── data.js
    ├── controllers/
    │   └── tracks.js
    ├── routes/
    │   └── tracks.js
    ├── app.js
    ├── package.json
    └── package-lock.json

## Features
The provided code implements a basic RESTful API for managing a collection of tracks. Here are the key features of the code: 

CRUD Operations: 
    Create: Add a new track to the collection.     Read: Retrieve all tracks or a single track by ID.     Update: Update the details of an existing track.     Delete: Remove a track from the collection.
         
HTTP Methods: 
    GET: Retrieve data.
    GET /tracks: Get all tracks.
    GET /tracks/:id: Get a single track by ID.
             
POST: Create new data.
POST /tracks: Create a new track.
             
PUT: Update existing data.
PUT /tracks/:id: Update a track by ID.
             
DELETE: Delete data.
DELETE /tracks/:id: Delete a track by ID.
             
         
Request and Response Handling: 
    The code handles incoming HTTP requests and sends appropriate responses.
    It parses request bodies for POST and PUT requests.
    It sends JSON responses for all API endpoints.
         
Error Handling: 
    The code includes error handling for various scenarios:
    404 Not Found: When a requested track is not found.
    400 Bad Request: When required fields are missing in the request body.
    500 Internal Server Error: For unexpected errors.
             
Middleware: 
    Express Middleware: Used to parse JSON request bodies.
    Error Handling Middleware: Catches and handles errors throughout the application.
         
Data Storage: 
    The code uses an in-memory array (tracks) to store track data.
    This data is not persistent; it will be lost when the server is restarted.
         
Routing: 
    The code uses Express Router to define and organize routes.
    Routes are modularized and imported into the main application file.
         
RESTful API Design: 
    The API follows RESTful principles, using standard HTTP methods and URLs to perform operations.
    It provides a clear and consistent interface for interacting with the track data.
         
Root Route: 
    A simple root route (/) that sends a "Hello, World!" message.
         
Invalid Route Handling: 
    A middleware function to handle requests to invalid routes, returning a 404 status code.
      
Server Setup: 
    The code sets up an Express server and listens on a specified port (default: 5000).
         
Logging: 
    The server logs a message to the console when it starts, indicating the port it is running on.
         
     
## Author
Godwin Oche
