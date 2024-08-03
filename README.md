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




## Deployment Documentation

### Frontend Deployment on Vercel

The frontend of this application has been deployed on Vercel. Here are the steps to deploy the React frontend:

1. **Sign Up / Log In to Vercel**:
   - Go to [Vercel](https://vercel.com/).
   - Sign up for a new account or log in to an existing account.

2. **Import Your Project**:
   - Click on "New Project".
   - Import your GitHub repository by selecting the GitHub integration.
   - Choose the repository containing your `todo-frontend` project.

3. **Configure Build Settings**:
   - Vercel will automatically detect the project framework (React).
   - Ensure that the build command is set to `npm run build` and the output directory is set to `build`.

4. **Environment Variables**:
   - If your frontend requires environment variables, you can add them in the "Environment Variables" section under the "Settings" of your Vercel project.
   - For this project, no specific environment variables are required for the frontend.

5. **Deploy**:
   - Click on "Deploy" to start the deployment process.
   - Vercel will build and deploy your project. 

6. **Access Your Deployed Frontend**:
   - Once the deployment is complete, Vercel will provide a URL where your application is live. You can share this URL or access it directly.

### Backend Deployment

For the backend, you need to deploy it on a Node.js compatible hosting service. Here’s a general guide for deploying on services like Heroku:

1. **Sign Up / Log In to Your Hosting Service**:
   - Sign up or log in to a Node.js hosting service such as [Heroku](https://www.heroku.com/).

2. **Prepare Your Application**:
   - Ensure your `todo-backend` project has a `Procfile` with the following content:
     ```
     web: node server.js
     ```
   - Make sure all environment variables used in your application are defined in a `.env` file or configured in the hosting service’s settings.

3. **Deploy Your Project**:
   - Connect your GitHub repository to the hosting service.
   - Deploy the project by selecting the repository containing your `todo-backend` code.
   - Follow the service-specific instructions to complete the deployment process.

4. **Set Environment Variables**:
   - In the hosting service dashboard, navigate to the environment variables settings.
   - Add necessary environment variables such as `JWT_SECRET` and any other required variables.

5. **Access Your Deployed Backend**:
   - Once deployment is complete, the hosting service will provide a URL where your backend is accessible.
   - Update your frontend application to point to this backend URL if necessary.

### Environment Variables

For both frontend and backend, ensure the following environment variables are set:

- **Frontend**: Generally, no specific environment variables are required unless you are connecting to a different backend URL.

- **Backend**:
  - `JWT_SECRET`: A secret key used for signing JWTs.
  - Any other environment variables needed for database connections or external services.

This documentation should guide you through deploying your project. If you encounter any issues, refer to the specific hosting service’s documentation for further assistance.
