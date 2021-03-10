import axios from 'axios';

const { REACT_APP_API_BASE_URL: baseURL } = process.env;

const axiosInstance = axios.create({
  baseURL,
  timeout: 35000,
});

export default axiosInstance;
