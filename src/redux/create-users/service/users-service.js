import axios from 'axios';

const API_URL = 'http://localhost:8000/';
const getUsers = () => axios.get(`${API_URL}users`);

export default {
  getUsers,
};
