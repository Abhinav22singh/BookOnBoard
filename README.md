# 📚 BOOKOnBOARD – MERN Bookstore App  

[![Made with MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)  
[![Made with Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)  
[![Made with React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)  
[![Made with Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)  
[![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)](https://jwt.io/)  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)  

---

A **modern and responsive full-stack Bookstore application** built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js).  
It provides a complete book shopping experience – from **browsing and carting to checkout and smart suggestions**.  

✨ Designed to be **intuitive and personalized**, the app also recommends books based on **user’s age and genre**.  

---

## 🚀 Key Features  

### 🔐 Authentication  
- User **Registration, Login, and Logout**  
- Secure routes protected via **JWT authentication**  

### 🏠 Home Page  
- Clean UI with catalog of books (title, author, price, image)  
- One-click **Add to Cart**  
- Fully responsive design  

### 🛒 Shopping Cart  
- Real-time cart updates (add, remove, update quantities)  
- Detailed **Order Summary**  
- Shipping address collection before checkout  

### 📖 Book Suggestions  
- Enter **age & genre** → get curated recommendations  
- Personalized algorithm for **children, teens, adults**  
- Interactive book discovery  

### 🎨 Design & UX  
- Clean, distraction-free layout  
- Responsive for **mobile & desktop**  
- Proper error handling & loading states  

### 👨‍💻 Developer Friendly  
- **Modular React components**  
- RESTful API backend structure  
- Clear file organization & reusable code  
- `.env` support for environment variables  

---

## 🛠️ Tech Stack  

### 🔹 Frontend  
- React.js (Hooks & Router)  
- Axios (API calls)  
- CSS / Styled Components  

### 🔹 Backend  
- Node.js with Express.js  
- MongoDB + Mongoose  
- JWT Authentication  
- dotenv, cors, body-parser  

---

## 🌐 Example API Endpoints  

| Method | Route                | Purpose                     |
|--------|----------------------|-----------------------------|
| POST   | `/api/auth/register` | Register new users          |
| POST   | `/api/auth/login`    | User login                  |
| GET    | `/api/books`         | Fetch all books             |
| POST   | `/api/cart`          | Add item to cart            |
| POST   | `/api/checkout`      | Checkout with address       |
| POST   | `/api/suggestions`   | Get book recommendations    |

---

## 📂 Project Structure  

backend/
├── src/
│ ├── config/ # DB connection, JWT setup
│ ├── controllers/ # Route handler logic
│ ├── data/ # Static/sample data
│ ├── middleware/ # Auth, error handling
│ ├── models/ # Mongoose models
│ └── routes/ # API routes
├── server.js # Express entry point
├── .env # Environment variables
├── package.json

frontend/
├── public/
│ └── index.html
├── src/
│ ├── assets/ # Images & icons
│ ├── components/ # Reusable UI
│ ├── pages/ # React pages
│ ├── styles/ # CSS files
│ ├── App.jsx
│ ├── main.jsx
│ └── bg.jpg
├── vite.config.js
├── package.json


---

## 🔮 Future Enhancements  
- 📊 **Admin Dashboard** – Add/edit/delete books  
- 💳 **Payment Integration** (Stripe)  
- ⭐ Book Ratings & Reviews  
- 🔎 Search & Genre Filters  
- 📜 Order History + Invoice Generation  
- 📩 Contact / Support Page  

---

## 👥 Authors  

- **Ishana Dasgupta**  
  - MERN Developer  
  - [GitHub](https://github.com/ishanaDG26) | 📧 ishanadasgupta043@gmail.com  

- **Abhinav Singh**  
  - MERN Developer  
  - [GitHub](https://github.com/Abhinav22singh) | 📧 singhabhinav2205@gmail.com  

---

## 📄 License  
This project is licensed under the **MIT License**.  
Feel free to **use, modify, and share** it 🎉  
