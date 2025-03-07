import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://localhost:3000/auth'; // Replace with your backend URL

export const signup = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Signup Error:', error.response?.data || error.message);
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    const { access_token } = response.data;

    // Store token in AsyncStorage
    await AsyncStorage.setItem('token', access_token);
    
    return response.data;
  } catch (error) {
    console.error('Login Error:', error.response?.data || error.message);
    throw error;
  }
};

export const getProfile = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
  
      if (!token) throw new Error("No token found");
  
      const response = await axios.get(`${API_URL}/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      return response.data;
    } catch (error) {
      console.error("Profile Fetch Error:", error.response?.data || error.message);
      throw error;
    }
  };
  

export const logout = async () => {
  await AsyncStorage.removeItem('token');
};
