<div align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/3514/3514491.png" alt="ShopSphere Logo" width="80" />
  <h1>ShopSphere</h1>
  <p>A full-stack MERN e-commerce platform with admin dashboard, Razorpay payments, Cloudinary image uploads, and JWT authentication.</p>

  <p>
    <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react" />
    <img src="https://img.shields.io/badge/Node.js-Express-339933?style=flat&logo=nodedotjs" />
    <img src="https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=flat&logo=mongodb" />
    <img src="https://img.shields.io/badge/Razorpay-Payments-0C2451?style=flat" />
    <img src="https://img.shields.io/badge/Cloudinary-Images-3448C5?style=flat" />
  </p>
  <p>
    <a href="https://github.com/geekpranjal/ShopSphere">
      <img src="https://img.shields.io/badge/GitHub-geekpranjal%2FShopSphere-f97316?style=flat&logo=github" />
    </a>
  </p>
</div>

---

## ✨ Features

- 🛍️ **Product Catalog** — Browse, filter, and search products by category
- 🛒 **Cart System** — Redux Toolkit-powered persistent cart
- 💳 **Razorpay Payments** — Full payment flow with order verification + Student Bypass Mode for testing
- 👤 **Authentication** — JWT-based register/login, OTP welcome emails, persistent sessions
- 📦 **Order Management** — Place orders, view history, email confirmation on every purchase
- 🔧 **Admin Dashboard** — Full CRUD for products, order status management, user directory, analytics
- ☁️ **Cloudinary** — Secure product image uploads via Multer
- 📧 **Email Notifications** — Nodemailer integration for welcome and order confirmation emails
- 📱 **Responsive Design** — Works on desktop and mobile

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React.js (CRA), Redux Toolkit, React Router v6, Context API |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB via Mongoose |
| **Auth** | JWT (JSON Web Tokens) + bcryptjs |
| **Payments** | Razorpay |
| **Cloud Storage** | Cloudinary + Multer |
| **Email** | Nodemailer (Gmail) |
| **Dev Tools** | Nodemon, Concurrently |

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 16
- MongoDB running locally (or a MongoDB Atlas connection string)
- A [Razorpay](https://razorpay.com) account (test keys)
- A [Cloudinary](https://cloudinary.com) account
- A Gmail account with an [App Password](https://support.google.com/accounts/answer/185833) enabled

### 1. Clone the Repository

```bash
git clone https://github.com/geekpranjal/ShopSphere.git
cd ShopSphere
```

### 2. Configure Environment Variables

Inside the `backend/` folder, create a `.env` file using `.env.example` as a template:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://127.0.0.1:27017/shopsphere
JWT_SECRET=your_super_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
GMAIL_USER=your_email@gmail.com
GMAIL_PASS=your_gmail_app_password
FRONTEND_URL=http://localhost:3000
```

> **Note:** Email and Razorpay are optional for basic local testing. The app includes a Student Bypass Mode for placing test orders without Razorpay keys configured.

### 3. Install Dependencies

From the **root folder**, run:

```bash
npm run install-all
```

This installs dependencies for the root, backend, and frontend.

### 4. Seed the Database (Optional)

Populate the database with sample products and an admin user:

```bash
npm run seed
```

> **Seed Admin Credentials:**
> - Email: `admin@shopsphere.com`
> - Password: `password123`

### 5. Run the Development Servers

Start both the backend (port 5000) and frontend (port 3000) with a single command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
ShopSphere/
├── backend/
│   ├── config/          # Database connection
│   ├── controllers/     # Route controllers (auth, products, orders, payment, analytics)
│   ├── middleware/      # Auth middleware
│   ├── models/          # Mongoose schemas (User, Product, Order)
│   ├── routes/          # Express routers
│   ├── utils/           # Email utility
│   ├── seed.js          # Database seeder
│   └── server.js        # Express app entry point
├── frontend/
│   ├── public/          # Static assets (logo, index.html)
│   └── src/
│       ├── admin/       # Admin dashboard pages
│       ├── components/  # Navbar, Footer, ProductCard
│       ├── context/     # AuthContext (JWT session)
│       ├── pages/       # All user-facing pages
│       ├── redux/       # Cart slice (Redux Toolkit)
│       └── styles/      # CSS files
├── ShopSphere_Postman_Collection.json
└── package.json
```

---

## ☁️ Deployment (Render — Free Tier)

ShopSphere supports single-instance deployment where the Express backend serves the React build.

1. Push this repo to **GitHub**.
2. Go to [Render Dashboard](https://dashboard.render.com) → **New Web Service**.
3. Connect your repository.
4. Set the **Build Command**:
   ```
   npm run build
   ```
5. Set the **Start Command**:
   ```
   npm start
   ```
6. Under **Advanced → Environment Variables**, add all your `.env` fields with `NODE_ENV=production`.
7. Click **Deploy**.

---

## 📬 Postman API Collection

Import `ShopSphere_Postman_Collection.json` into Postman to test all API endpoints.
It includes pre-configured requests for Auth, Products, Orders, and Analytics with `{{token}}` variable support.

---

## 👨‍💻 Author

**geekpranjal** — [github.com/geekpranjal](https://github.com/geekpranjal)

---

## 📄 License

This project is open source and available under the [ISC License](https://opensource.org/licenses/ISC).
