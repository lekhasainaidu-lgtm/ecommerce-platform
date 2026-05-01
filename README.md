# ðŸ›’ E-Commerce Platform

A full-stack e-commerce web application with a modern UI, shopping cart, authentication, payment integration, and an admin dashboard.

## ðŸš€ Tech Stack

- **Frontend:** React.js, CSS3, React Router
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Payments:** Stripe API
- **Auth:** JWT, bcrypt

## âœ¨ Features

- User registration & login (JWT auth)
- Product listing with search & filters
- Shopping cart & wishlist
- Stripe payment integration
- Admin dashboard (manage products, orders)
- Order tracking

## ðŸ“ Project Structure

```
ecommerce-platform/
â”œâ”€â”€ client/                 # React frontend
â”‚   â”œâ”€â”€ public/
â”‚   â””â”€â”€ src/
â”‚       â”œâ”€â”€ components/
â”‚       â”œâ”€â”€ pages/
â”‚       â”œâ”€â”€ context/
â”‚       â””â”€â”€ App.jsx
â”œâ”€â”€ server/                 # Node.js backend
â”‚   â”œâ”€â”€ controllers/
â”‚   â”œâ”€â”€ models/
â”‚   â”œâ”€â”€ routes/
â”‚   â”œâ”€â”€ middleware/
â”‚   â””â”€â”€ server.js
â”œâ”€â”€ .env.example
â””â”€â”€ package.json
```

## âš™ï¸ Setup

```bash
# Clone the repo
git clone https://github.com/lekhasainaidu-lgtm/ecommerce-platform.git

# Install server dependencies
cd server && npm install

# Install client dependencies
cd ../client && npm install

# Set up environment variables
cp .env.example .env

# Run development servers
npm run dev
```

## ðŸŒ Environment Variables

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
PORT=5000
```

## ðŸ“¸ Screenshots

> Coming soon

---
Made with â¤ï¸ by [Lekha](https://github.com/lekhasainaidu-lgtm)
