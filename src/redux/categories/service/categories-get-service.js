import axios from 'axios';

const API_URL = 'http://localhost:8000/';
const getCategories = () => axios.get(`${API_URL}categories`);

export default {
  getCategories,
};
