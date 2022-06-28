import axios from 'axios';

const API_URL = 'http://localhost:8000/';
// @ts-ignore
const createNewCategory = ({ title, subCategory, subSubCategory }) => axios.post(`${API_URL}categories`, {
  title, subCategory, subSubCategory,
});

export default {
  createNewCategory,
};
