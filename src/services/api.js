import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:5000`
});

export const getDocuments = async () => {
  const response = await api.get(`/documents`);
  return response.data;
};

export const removeDocument = async id => {
  const response = await api.delete(`/documents/${id}`);
  return response.data;
};

export const addDocument = async payload => {
  const response = await api.post(`/documents/`, payload);
  return response.data;
};
