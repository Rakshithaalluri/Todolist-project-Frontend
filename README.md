# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# API Documentation

This document provides a detailed description of the API endpoints for the Todo List Project.

## Base URL

The base URL for the API is:

- **Development**: `http://localhost:3000`
- **Production**: `https://your-production-url.com`

## Endpoints

### 1. User Registration

**Endpoint**: `POST /register`

**Description**: Register a new user.

**Request Body**:
```json
{
  "username": "Rakshitha Alluri",
  "password": "123456"
}

Endpoints
1. User Registration
Endpoint: POST /register

Description: Register a new user.

{
  "username": "Rakshitha Alluri",
  "password": "123456"
}
Response:

Success: 201 Created


{
  "message": "User registered successfully."
}
Error: 400 Bad Request


{
  "error": "Username or password missing."
}
2. User Login
Endpoint: POST /login

Description: Log in a user and obtain a JWT token.

Request Body:

{
  "username": "string",
  "password": "string"
}
Response:

Success: 200 OK

{
  "token": "string"
}
Error: 401 Unauthorized

{
  "error": "Invalid username or password."
}
3. Create To-Do Item
Endpoint: POST /todos

Description: Create a new to-do item.

Headers:

Authorization: Bearer <token>
Request Body:

{
  "description": "string",
  "status": "string"
}
Response:

Success: 201 Created


{
  "message": "To-do item created."
}
Error: 400 Bad Request

{
  "error": "Invalid data."
}
4. Get All To-Do Items
Endpoint: GET /todos

Description: Fetch all to-do items for the logged-in user.

Headers:

Authorization: Bearer <token>
Response:

Success: 200 OK

[
  {
    "id": "integer",
    "description": "string",
    "status": "string"
  }
]
5. Update To-Do Item
Endpoint: PUT /todos/:id

Description: Update a to-do item.

Headers:

Authorization: Bearer <token>
Request Body:


{
  "description": "string",
  "status": "string"
}
Response:

Success: 200 OK


{
  "message": "To-do item updated."
}
Error: 400 Bad Request


{
  "error": "Invalid data."
}
6. Delete To-Do Item
Endpoint: DELETE /todos/:id

Description: Delete a to-do item.

Headers:

Authorization: Bearer <token>
Response:

Success: 200 OK


{
  "message": "To-do item deleted."
}
Error: 404 Not Found

{
  "error": "To-do item not found."
}
