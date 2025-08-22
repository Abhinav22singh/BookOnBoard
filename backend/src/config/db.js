const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Check if MONGO_URI exists
    if (!process.env.MONGO_URI) {
      console.log('⚠  No MONGO_URI found, running without database');
      return;
    }

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 15000,
      connectTimeoutMS: 15000,
    });
    
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    console.log('⚠  Server will continue without database');
    // DON'T exit process - let server run without database
    // process.exit(1); // <-- REMOVED THIS
  }
};

module.exports = connectDB;