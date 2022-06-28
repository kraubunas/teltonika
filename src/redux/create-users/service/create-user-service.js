import axios from 'axios';

const API_URL = 'http://localhost:8000/';
// @ts-ignore
const createNewUser = (firstName, lastName, password, email, age, gender, category) => axios.post(`${API_URL}users`, {
  firstName,
  lastName,
  password,
  email,
  age,
  gender,
  category,
});

export default {
  createNewUser,
};
