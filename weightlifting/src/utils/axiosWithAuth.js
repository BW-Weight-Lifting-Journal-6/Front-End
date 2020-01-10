import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://weight-lifting-api.herokuapp.com/',
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;