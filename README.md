# BrewApps Assignment

This repository contains a Node.js application for managing books. The application provides several API endpoints for adding, viewing, updating, and deleting books. Below are the instructions for installing and running the application, as well as details about the available API endpoints.

## Installation

```sh
git clone https://github.com/RajatSachan37/BrewApps-Assignment.git
cd brewapps-assignment
npm install
node app.js
```

The application will start running at http://localhost:3000.

# API Endpoints

* Local Base URL: http://localhost:3000/
* Deployed Base URL: https://brew-apps-nt00.onrender.com/

- **POST /add-new-book**
  - Adds a new book to the database.
  - Parameters:
    - `title` (string, required): The title of the book.
    - `author` (string, required): The author of the book.
    - `summary` (string, required): Summary of the book.
  - Local Endpoint: `http://localhost:3000/api/add-new-book`
  - Deployed Endpoint: `https://brew-apps-nt00.onrender.com/api/add-new-book`

- **GET /view-all-books**
  - Retrieves all books from the database.
  - Parameters: None
  - Local Endpoint: `http://localhost:3000/api/view-all-books`
  - Deployed Endpoint: `https://brew-apps-nt00.onrender.com/api/view-all-books`

- **GET /view-book/:book_id**
  - Retrieves a specific book based on its ID.
  - Parameters:
    - `book_id` (string, required): ID of the book to be retrieved.
  - Local Endpoint: `http://localhost:3000/api/view-book/:book_id`
  - Deployed Endpoint: `https://brew-apps-nt00.onrender.com/api/view-book/:book_id`

- **PATCH /update-book/:book_id**
  - Updates a specific book based on its ID.
  - Parameters:
    - `book_id` (string, required): ID of the book to be updated.
    - `title` (string, optional): New title of the book.
    - `author` (string, optional): New author of the book.
    - `summary` (string, optional): New summary of the book.
  - Local Endpoint: `http://localhost:3000/api/update-book/:book_id`
  - Deployed Endpoint: `https://brew-apps-nt00.onrender.com/api/update-book/:book_id`

- **DELETE /delete-book/:book_id**
  - Deletes a specific book based on its ID.
  - Parameters:
    - `book_id` (string, required): ID of the book to be deleted.
  - Local Endpoint: `http://localhost:3000/api/delete-book/:book_id`
  - Deployed Endpoint: `https://brew-apps-nt00.onrender.com/api/delete-book/:book_id`
