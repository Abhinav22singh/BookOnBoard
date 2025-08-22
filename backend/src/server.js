require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');

const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = {
  origin: 'https://book-on-board-j47x.vercel.app', // Vercel frontend
  methods: 'GET,POST,PUT,DELETE',
  credentials: true,
};

app.use(cors(corsOptions));


// Trust proxy for Vercel/Railway (fixes rate limiter error)
app.set('trust proxy', 1);

// Health check route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Book Store API is running successfully! 🚀', 
    status: 'success', 
    endpoints: { 
      users: '/api/users', 
      books: '/api/books' 
    } 
  }); 
});

// Connect to MongoDB
connectDB();

// Middleware
app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        "default-src": ["'self'"],
        "font-src": ["'self'", 'http://localhost:5000', 'https:'],
        "img-src": ["'self'", 'data:', 'http://localhost:5000', 'https:'],
        "style-src": ["'self'", "'unsafe-inline'", 'http://localhost:5000'],
        "script-src": ["'self'", "'unsafe-inline'"]
      },
    },
  })
);

app.use(cors());
app.use(express.json());

// Rate limiter
app.use(rateLimit({ 
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  standardHeaders: true,
  legacyHeaders: false
}));

// Serve static uploads
app.use('/uploads', express.static(path.join(__dirname, 'middleware', 'uploads')));

// API routes
app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);

// Start server
app.listen(PORT, '0.0.0.0', () => 
  console.log(`🚀 Server running on port ${PORT}`)
);
