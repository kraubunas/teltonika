import axios from 'axios';

const API_URL = 'http://localhost:8000/';
const createNewUser = ({
  // @ts-ignore
  firstName, lastName, password, email, age, gender, category,
}) => axios.post(`${API_URL}users`, {
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
