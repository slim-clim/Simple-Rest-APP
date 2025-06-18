# Simple REST API with Express.js

## Project Overview

This project is a Simple RESTful API built using Express.js that performs CRUD operations (Create, Read, Update, Delete) on an in-memory tracks list. It demonstrates the basics of REST API development, including error handling, global error middleware, and modular code organization.

## Prerequisites

Before running this project, ensure you have the following installed:

Node.js (Recommended version: 16+)

npm (Node Package Manager)

A code editor (VS Code recommended)

Postman (Optional, for API testing)

## Installation & Setup Steps

Follow these steps to set up and run the project locally:

1 Clone the repositor

git clone <your-repo-url>
cd <your-folder>

2 Initialize Node.js project

npm init -y

3 Install dependencies

npm install express nodemon

4 Run the server

npm start

5 View the project

Server is running on port:
http://localhost:5000

## Technologies Used

- Node.js

- Express.js

- JavaScript

- Postman (for API testing)

## Project Structure

mini-rest-api/

    controller/
        tracks.js

    data/
        data.js

    routes/
        tracks.js

    app.js
    package.json
    README.md

## Features

- Full CRUD (Create, Read, Update, Delete) functionality

- Global error handling

- 404 handling for invalid routes

- Nodemon used to automatically run the server when changes occurs

- Modular structure for better code organization

- Postman Collection available for easy testing

## API Endpoints

### GET /

Returns: Hello, World!

### GET /tracks

Returns the full list of tracks.

Example Response:[
{
"id": 1,
"name": "Software Development",
"description": "Software development has to do with the building of software which involves either frontend, backend, or fullstack"
},
{
"id": 2,
"name": "UI/UX",
"description": "UI/UX is the creation of user appealing design which deals with the user interface and experience. Tools like figma and others are used to create these designs."
}
]

### GET /tracks/:id

Returns a single track by ID.

Example Response:{
    id: 1,
    name: "John Marcus",
    description: "Full Stack Developer",
  },

### POST /tracks
Success Response:[{"id":1,"name":"John Marcus","description":"Full Stack Developer"},{"id":2,"name":"Maira Joshua","description":"Proficient Project Manager"}]

### PUT /tracks/:id

Success Response:{"id":1,"name":"John Marcus","description":"Full Stack Developer"}

### DELETE /tracks/:id

Success Response:{
"message": `Track with the id of ${id} was deleted successfully`
}

## Error Handling

- 400 Bad Request: Missing required fields

- 404 Not Found: track or route not found

- 500 Internal Server Error: Unexpected server error

## Example package.json Script

"scripts": {
"start": "node app.js"
}

## Author

Godwin Oche
