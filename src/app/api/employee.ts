import api from '../lib/api'
import https from 'https';

const agent = new https.Agent({
  rejectUnauthorized: false, // SSL sertifika doğrulamasını kapat
});

export const getEmployee = (id: string) => api.get(`/users/${id}`);
export const getEmployees = () => api.get('/Employees',{ httpsAgent: agent });
export const deleteEmployee = (id: number) => api.get(`/Employees/Remove?id=${id}`, { httpsAgent: agent });

export const updateEmployeer = (id: string, data: any) => api.put(`/users/${id}`, data);
export const createEmployee = (data: any) => api.post('/Employees', data);
