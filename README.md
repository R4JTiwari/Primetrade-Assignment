# PrimeTrade - Backend Developer Assignment

A full-stack task management application built for Backend Developer Internship Assignment.

## Live Features

### Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes

### Role Based Access
- User Role
- Admin Role
- Admin-only APIs

### Task Management
- Create Task
- Read Tasks
- Update Task
- Delete Task

### Backend Features
- REST API Design
- MongoDB Database
- Input Validation
- Global Error Handling
- Swagger API Docs

### Frontend Features
- React UI
- Login / Register Pages
- Dashboard
- Responsive Design

---

# Tech Stack

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Zod

## Frontend
- React.js
- Vite
- Axios
- React Router

---

# Folder Structure

```bash
backend/
frontend/

Setup Instructions
Clone Repository
git clone <your-repo-url>
cd Primetrade
Backend Setup
cd backend
npm install
npm run dev

Create .env

PORT=3000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret
Frontend Setup
cd frontend
npm install
npm run dev
API Documentation

Open:

http://localhost:3000/api-docs


# Scalability Note

This project is built with a modular architecture for future scalability.

## Possible Improvements

### 1. Microservices
Authentication, task management, and admin services can be separated into independent services.

### 2. Caching
Redis can be used to cache frequently requested task data and reduce database load.

### 3. Load Balancing
Multiple backend instances can run behind a load balancer such as Nginx.

### 4. Database Scaling
MongoDB Atlas replica sets and sharding can be used for high traffic systems.

### 5. Logging & Monitoring
Winston, Morgan, and Prometheus/Grafana can be integrated for production monitoring.