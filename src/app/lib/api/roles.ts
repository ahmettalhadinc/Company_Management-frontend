import api from '../api'
import https from 'https';

const agent = new https.Agent({
  rejectUnauthorized: false, // SSL sertifika doğrulamasını kapat
});

export const getRole = (id: string) => api.get(`/Roles/${id}`);
export const getRoles = () => api.get('/Roles',{ httpsAgent: agent });
export const deleteRole = (id: number) => api.get(`/Roles/Remove?id=${id}`, { httpsAgent: agent });

export const updateRole = (id: string, data: any) => api.put(`/Roles/${id}`, data);
export const createRole = (data: any) => api.post('/Roles', data);
