# E-Commerce Web Application

A full-stack E-Commerce application built using React, Node.js, Express, and MongoDB.

## 🚀 Features

- User Authentication (Login/Register)
- JWT Authentication
- Role-Based Access (Admin/User)
- Product Management
- Shopping Cart
- Checkout System
- Order Management
- Responsive UI with Tailwind CSS
- MongoDB Database Integration

---

## 🛠️ Tech Stack

### Frontend
- React
- React Router DOM
- Axios
- Tailwind CSS
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

---

## 📂 Project Structure

```bash
ECommerce/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── vite.config.js
│
└── README.md
```

---

## ⚙️ Installation

---

### Backend Setup

```bash
cd backend
npm install
npm run dev
```


### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 API Endpoints

### Auth Routes

| Method | Endpoint |
|---|---|
| POST | /api/auth/register |
| POST | /api/auth/login |

### Product Routes

| Method | Endpoint |
|---|---|
| GET | /api/products |
| POST | /api/products |

### Order Routes

| Method | Endpoint |
|---|---|
| POST | /api/orders |
| GET | /api/orders/my |

---

## 🚀 Deployment

- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

## 👩‍💻 Author

Magi Sathya Priya