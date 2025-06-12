import axios from 'axios';
const API_URL = process.env.API_URL

export const fetchCars = () => {
  return axios.get(`${API_URL}/cars`);
};

export const postCar = (carData) => {
  return axios.post(`${API_URL}/cars`, carData);
};

