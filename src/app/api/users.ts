import api from '../lib/api'
import https from 'https';

const agent = new https.Agent({
  rejectUnauthorized: false, // SSL sertifika doğrulamasını kapat
});

export const getUser = (id: string) => api.get(`/Users/${id}`);
export const getUsers = () => api.get('/Users',{ httpsAgent: agent });
export const deleteUser = (id: number) => api.get(`/Users/Remove?id=${id}`, { httpsAgent: agent });

export const updateUser = (id: string, data: any) => api.put(`/Users/${id}`, data);
export const createUser = (data: any) => api.post('/Users', data);
export const loginUser = (data: any) => api.post('/Users/Login', data);
