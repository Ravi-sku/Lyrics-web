# Lyrics Website Backend

A Node.js + Express.js + MongoDB backend for a Lyrics Website.

## Features

* Admin Authentication
* JWT Based Login
* Cookie Authentication
* Protected Routes
* Song CRUD Operations
* Slug Generation
* Search Songs by Title
* MongoDB Database Integration

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* cookie-parser
* dotenv

---

## Project Structure

src/

├── config/

├── controller/

├── middleware/

├── models/

├── routes/

├── seeder/

├── utils/

└── app.js

---

## Installation

Clone the repository:

git clone <repository-url>

Install dependencies:

npm install

Create .env file:

MONGO_URI=your_mongodb_uri

JWT_SECRET=your_secret_key

ADMIN_EMAIL=[admin@example.com](mailto:admin@example.com)

ADMIN_PASSWORD=your_password

Run server:

npm start

---

## Authentication

Login API generates JWT token and stores it in HTTP Only Cookie.

Protected routes:

* Add Song
* Update Song
* Delete Song

---

## API Routes

### Login

POST /api/login

### Songs

POST /api/song

GET /api/song

GET /api/song/:slug

PUT /api/song/:id

DELETE /api/song/:id

### Search

GET /api/search?q=keyword

---

## Example Search

GET /api/search?q=tum

Returns songs matching the search keyword.

---

## Future Improvements

* Role Based Authorization
* Song Views Counter
* Top Songs API
* Pagination
* Artist Pages
* React Admin Dashboard
* SEO Optimization

---

## Author
Ravi Ranjan
