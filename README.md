# Full-Stack SaaS Starter (React + Tailwind + Express + MongoDB)

A complete starter template with:

- **Frontend:** React + Vite + Tailwind CSS + React Router
- **Backend:** Node.js + Express + MongoDB (Mongoose)
- **Auth:** JWT-based authentication with hashed passwords
- **API Structure:** Modular routes/controllers/middleware/models

## Project Structure

```txt
.
├── backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   └── server.js
│   ├── .env.example
│   └── package.json
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── context
│   │   ├── lib
│   │   ├── pages
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   └── package.json
└── package.json
```

## Quick Start

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

```bash
cp backend/.env.example backend/.env
```

Update values in `backend/.env` (especially `MONGO_URI` and `JWT_SECRET`).

### 3) Run in development

```bash
npm run dev
```

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000/api`

## API Endpoints

### Public

- `POST /api/auth/register` — register user
- `POST /api/auth/login` — login user

### Protected (JWT required)

- `GET /api/users/me` — current authenticated user

## Authentication Flow

1. User registers or logs in.
2. Backend returns a JWT token and user payload.
3. Frontend stores token in `localStorage`.
4. Frontend includes token in `Authorization: Bearer <token>` header.
5. Protected backend routes validate JWT via middleware.

## Production Notes

- Move JWT storage to secure cookies for higher security.
- Add refresh token support and token revocation.
- Add input validation (Joi/Zod/express-validator).
- Add role-based authorization and audit logging.
- Add centralized API error handling and rate limiting.
