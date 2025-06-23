import api from '../lib/api'
import https from 'https';

const agent = new https.Agent({
  rejectUnauthorized: false, // SSL sertifika doğrulamasını kapat
});

export const getDepartment = (id: string) => api.get(`/Department/${id}`);
export const getDepartments = () => api.get('/Departments',{ httpsAgent: agent });
export const deleteDepartment = (id: number) => api.get(`/Departments/Remove?id=${id}`, { httpsAgent: agent });

export const updateDepartment = (id: string, data: any) => api.put(`/users/${id}`, data);
export const createDepartment = (data: any) => api.post('/Departments', data);
