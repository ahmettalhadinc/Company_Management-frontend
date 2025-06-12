// lib/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7284/api/',
  withCredentials: true,
});

export default api;