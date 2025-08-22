import axios from 'axios';

// Use environment variable if available, fallback to Railway URL
const BASE_URL = process.env.REACT_APP_API_URL || 'https://book-store-backend-production-3fe5.up.railway.app/api';

const API = axios.create({
  baseURL: BASE_URL,
});

export default API;
