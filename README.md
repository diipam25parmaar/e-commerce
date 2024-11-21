# 🛒 E-Commerce MERN Application

A full-stack E-Commerce application built with **Node.js**, **Express**, **MongoDB**, and **React**.  
It includes a complete user flow (browse → cart → checkout → payment) and an admin panel for managing products, orders, and users.

---

## 📚 Table of Contents

- [Features](#-features)
  - [User Features](#user-features)
  - [Admin Features](#admin-features)
  - [Technical Features](#technical-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Backend Setup](#2-backend-setup)
  - [3. Frontend Setup](#3-frontend-setup)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [API Overview](#-api-overview)
- [Future Improvements](#-future-improvements)
- [Author](#-author)

---

## ✨ Features

### User Features

- 🔐 **Authentication & Authorization**
  - Register, login, logout with **JWT-based** authentication
  - Password hashing using **bcrypt**
  - Protected routes for authenticated users only

- 👤 **User Profile**
  - View and update profile details
  - Update password
  - Avatar upload using **Cloudinary**

- 🛍️ **Product Browsing**
  - View all products with pagination
  - View single product details
  - Search products by keyword
  - Filter by category, price range, and ratings (powered by custom API filtering logic)

- 🛒 **Shopping Cart**
  - Add/remove items to/from cart
  - Update quantity
  - Persistent cart in Redux store

- 💳 **Checkout & Payment**
  - Place orders with shipping details
  - Process payments via **Stripe**
  - View order details and order history

### Admin Features

- 📦 **Product Management**
  - Create, update, and delete products
  - Upload product images (Cloudinary)
  - Manage product stock and pricing

- 📊 **Dashboard & Analytics**
  - Admin dashboard to view:
    - Total users
    - Total orders
    - Total revenue
    - Product statistics (using **Chart.js**)
  
- 📑 **Order Management**
  - View all orders
  - Update order status (e.g., Processing → Shipped → Delivered)
  - Delete orders

- 👥 **User Management**
  - View all users
  - Update user roles (e.g., user ↔ admin)
  - Delete users

### Technical Features

- 🌐 **RESTful API** with Express
- 🗄️ **MongoDB** data models using **Mongoose**
- 🛡️ Secure password hashing and JWT handling
- 📧 Email sending with **Nodemailer** (e.g., for password reset)
- ☁️ File upload and image storage with **Cloudinary**
- 🧩 Modular architecture (controllers, routes, models, middleware, utils)
- ⚙️ Environment-based configuration via `.env` files
- 🧵 Centralized error handling middleware
- 🎯 Redux for state management on the frontend
- 🎨 UI with **Material-UI** components

---

## 🧱 Tech Stack

**Frontend**

- React (Create React App)
- React Router
- Redux & Redux Thunk
- Axios
- Material-UI (`@material-ui/core`, `@material-ui/icons`, `@material-ui/data-grid`, `@material-ui/lab`)
- Chart.js for dashboard charts

**Backend**

- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Token (**jsonwebtoken**)
- bcrypt / bcryptjs
- Stripe (`stripe`, `@stripe/stripe-js`, `@stripe/react-stripe-js`)
- Cloudinary SDK
- Nodemailer
- Express middleware (body-parser, cookie-parser, file upload, custom error handling)

---

## 📁 Project Structure

```bash
e-commerce/
├── backend/
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   ├── config/
│   │   ├── config.env          # local environment variables (not committed)
│   │   ├── config.env.example  # example env file (safe placeholders)
│   │   └── database.js         # MongoDB connection
│   ├── controllers/            # business logic for routes
│   ├── middleware/             # auth, error handling, async wrapper
│   ├── models/                 # Mongoose models (User, Product, Order)
│   ├── routes/                 # Express routes (user, product, order, payment)
│   └── utils/                  # helpers (API features, JWT token, sendEmail, etc.)
│
└── frontend/
    ├── src/
    │   ├── App.js
    │   ├── store.js
    │   ├── actions/            # Redux actions
    │   ├── reducers/           # Redux reducers
    │   ├── component/          # UI components (User & Admin)
    │   ├── constants/          # Redux action type constants
    │   └── images/             # static images
    ├── package.json
    └── README.md               # CRA default README (frontend-specific)