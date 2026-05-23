import axios, { AxiosInstance, AxiosError } from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.example.com';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      window.location.href = '/food-delivery/auth';
    }
    return Promise.reject(error);
  }
);

// API Methods
export const API = {
  // Restaurants
  getRestaurants: () =>
    axiosInstance.get('/restaurants').then(res => res.data),
  getRestaurantById: (id: string) =>
    axiosInstance.get(`/restaurants/${id}`).then(res => res.data),
  searchRestaurants: (query: string) =>
    axiosInstance.get('/restaurants/search', { params: { q: query } }).then(res => res.data),

  // Dishes
  getDishes: (restaurantId: string) =>
    axiosInstance.get(`/restaurants/${restaurantId}/dishes`).then(res => res.data),
  getDishById: (dishId: string) =>
    axiosInstance.get(`/dishes/${dishId}`).then(res => res.data),

  // Auth
  login: (email: string, password: string) =>
    axiosInstance.post('/auth/login', { email, password }).then(res => res.data),
  signup: (userData: any) =>
    axiosInstance.post('/auth/signup', userData).then(res => res.data),
  logout: () =>
    axiosInstance.post('/auth/logout').then(res => res.data),

  // Orders
  createOrder: (orderData: any) =>
    axiosInstance.post('/orders', orderData).then(res => res.data),
  getOrders: () =>
    axiosInstance.get('/orders').then(res => res.data),
  getOrderById: (id: string) =>
    axiosInstance.get(`/orders/${id}`).then(res => res.data),
  trackOrder: (id: string) =>
    axiosInstance.get(`/orders/${id}/track`).then(res => res.data),

  // User
  getProfile: () =>
    axiosInstance.get('/user/profile').then(res => res.data),
  updateProfile: (userData: any) =>
    axiosInstance.put('/user/profile', userData).then(res => res.data),
  addAddress: (addressData: any) =>
    axiosInstance.post('/user/addresses', addressData).then(res => res.data),
  updateAddress: (addressId: string, addressData: any) =>
    axiosInstance.put(`/user/addresses/${addressId}`, addressData).then(res => res.data),
  deleteAddress: (addressId: string) =>
    axiosInstance.delete(`/user/addresses/${addressId}`).then(res => res.data),

  // Reviews
  addReview: (itemId: string, reviewData: any) =>
    axiosInstance.post(`/reviews`, { ...reviewData, itemId }).then(res => res.data),
  getReviews: (itemId: string) =>
    axiosInstance.get(`/reviews?itemId=${itemId}`).then(res => res.data),
};

export default axiosInstance;
