import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.17:8000/api', //'http://192.168.0.15:8000/api', //, // our API base URL
});

// Request interceptor for adding the bearer token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//email: 'santhipandi@ymail.com',
// password: 'Password@123'
//Login API
export const getToken = async () => {
  return await api.post('/auth/login', {
    email: 'chitralakshmi@api.jwt',
    password: '123456'
  })
  .then(function (response) {
    localStorage.setItem("token", response.data.access_token);
    //response.json()
  })
  .catch(function (error) {
    console.log(error);
    // error;
  });
};

// API endpoints
export const getUser = () => {
  return api.get('/auth/userprofile');
};

/*export const deleteUser = (userId) => {
  return api.delete(`/user/${userId}`);
};*/

// Export the api instance
export default api;
