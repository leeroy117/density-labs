# Technical Test - Pairing Session

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/leeroy117/density-labs.git

## For Database
    docker-compose up

## For Backend
    cd backend 
    npm install 
    npm run dev 
        or 
    npm run build and npm run start

## For Frontend
    cd frontend 
    npm install 
    npm run dev 
        or 
    npm run build and npm run preview


This repository contains the technical test completed during a **pairing** session. Below are the details about the **backend** and **frontend** technologies used in the implementation of this test.

## General Description

In this technical test, an application was developed that involves both **backend** and **frontend** components. During the **pairing** session, the requirements were discussed, and the features were implemented step by step.

## Database
    - PostgreSQL

## Backend

- **Technology used**: **Express** with **TypeScript**.
- **Details**:
  - A RESTful API was implemented using **Express** to handle HTTP requests.
  - **TypeScript** was used to ensure proper typing and provide a more robust development experience.
  - Functionality was included to manage comments (create, delete, update and get) through specific endpoints.

## Frontend

- **Technology used**: **React** with **TypeScript**.
- **Details**:
  - An interactive user interface was built with **React** to display and manage comments.
  - **TypeScript** was used in the frontend to leverage static typing and enhance the development experience.
  - The interface includes functionality for editing and deleting comments, as well as a confirmation modal before deleting a comment.

## Features

- **Read Comments**: Users can read comments
- **Add Comments**: Users can add new comments through a form in the frontend.
- **Delete Comments**: A comment can be deleted with a confirmation prompt using a modal.
- **Edit Comments**: Users can edit existing comments.

## Requirements

### Backend

1. **Node.js**:  Runtime environment for JavaScript, allowing the execution of JavaScript outside the browser.
2. **Express**: A fast and minimalist web framework for Node.js, used to build backend APIs.
3. **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
4. **CORS**: Middleware for handling Cross-Origin Resource Sharing, enabling the frontend to communicate with the backend.
5. **TypeORM**: Object-Relational Mapper (ORM) for TypeScript and JavaScript.
6. **Zod**: for validation and parsing, offering strong TypeScript support.


### Frontend

1. **React**: JavaScript library for building user interfaces.
2. **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
3. **Axios**: Promise-based HTTP client for making requests to the backend.
4. **Redux**: A predictable state container for JavaScript apps.
5. **Formik**: Library for building forms in React, with support for validation and error handling.
6. **Yup**: A JavaScript schema builder for value parsing and validation, commonly used with Formik.
7. **TailwindCSS**: A utility-first CSS framework for building custom designs without writing CSS.






