import api from '../lib/api'
import https from 'https';

const agent = new https.Agent({
  rejectUnauthorized: false, // SSL sertifika doğrulamasını kapat
});
export const getProduct = (id: string) => api.get(`/ProductsControllers/${id}`);
export const getProducts = () => api.get('/ProductsControllers',{ httpsAgent: agent });
export const deleteProduct = (id: number) => api.get(`/ProductsControllers/Remove?id=${id}`, { httpsAgent: agent });

export const updateProduct = (id: string, data: any) => api.put(`/ProductsControllers/${id}`, data);
export const increaseStock = ( product: any) => api.post(`/ProductsControllers/IncreaseStock`, product);
export const decreaseStock = ( product: any) => api.post(`/ProductsControllers/DecreaseStock`, product);

export const createProduct = async (data: any) => {
  // İlk olarak token'ı al
  const res = await fetch('/api/token', { credentials: 'include' });
  const result = await res.json();


  if (!res.ok) throw new Error(result.error || 'Token alınamadı');
  const token = result.token;

  // Şimdi token'ı Authorization header olarak gönder
  return fetch('https://localhost:7284/api/ProductsControllers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
};
