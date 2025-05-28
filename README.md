# Express CRUD API

A simple RESTful API built with **Node.js** and **Express** demonstrating CRUD (Create, Read, Update, Delete) operations for user management. This project showcases skills in building modular, maintainable server-side applications using modern JavaScript and Express best practices.

## Features

- Built with **Express 5** and **Node.js**
- Modular structure (routes, controllers)
- Uses **UUID** for unique user IDs
- In-memory data storage (easy to adapt to databases)
- RESTful API design
- Error handling for not found resources

## Project Structure

```
├── app.js                # Main entry point
├── controllers/
│   └── users.js          # User controller logic
├── routes/
│   └── users.js          # User routes
├── user.json             # Example user data (not used in API)
├── package.json          # Project metadata and dependencies
```

## Skills Demonstrated

- **Node.js**: Asynchronous programming, ES modules
- **Express**: Routing, middleware, RESTful API design
- **Project Structure**: Separation of concerns (routes/controllers)
- **UUID**: Generating unique IDs for resources
- **Error Handling**: Proper HTTP status codes and messages

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)

### Installation

```bash
npm install
```

### Running the Server

- For production:
  ```bash
  npm start
  ```
- For development (with auto-reload):
  ```bash
  npm run dev
  ```

The server will run on `http://localhost:5000` by default.

## API Endpoints

All endpoints are prefixed with `/users`.

| Method | Endpoint   | Description       |
| ------ | ---------- | ----------------- |
| GET    | /users     | Get all users     |
| GET    | /users/:id | Get user by ID    |
| POST   | /users/add | Add a new user    |
| PATCH  | /users/:id | Update user by ID |
| DELETE | /users/:id | Delete user by ID |

### Example User Object

```json
{
  "name": "Ali",
  "lastName": "Mohamad",
  "age": 30
}
```

### Sample Requests

- **Add User**
  ```http
  POST /users/add
  Content-Type: application/json
  {
    "name": "John",
    "lastName": "Doe",
    "age": 28
  }
  ```
- **Update User**
  ```http
  PATCH /users/1
  Content-Type: application/json
  {
    "age": 31
  }
  ```

## Notes

- Data is stored in-memory and will reset on server restart.
- Easily extendable to use a database (MongoDB, PostgreSQL, etc).

## License

ISC
