import axios from 'axios';
import { NavigateFunction } from 'react-router-dom';

const API_URL = 'https://api-test-web.agiletech.vn';
export const handleLogin = (username: string, nav: NavigateFunction) => async (event: React.FormEvent<HTMLFormElement>) => {
  
  event.preventDefault();
  const validUsernames: string[] = ['admin', 'admin1', 'admin2', 'adminRefresh', 'adminRefresh1', 'adminRefresh2'];
  if (!validUsernames.includes(username)) {
    return alert('Username là admin, admin1, admin2, adminRefresh, adminRefresh1, adminRefresh2');
  }
  try {
    const res = await axios.post(`${API_URL}/auth/login`, { username });
    console.log(res);
    localStorage.setItem('accessToken', res.data.accessToken);
    localStorage.setItem('refreshToken', res.data.refreshToken);
    alert('Log in successfully')
    nav('/')
  } catch (err) {
    console.log(err);
  }
};


export const refreshToken = async (token: string) => {
  try {
    const response = await axios.post(`${API_URL}/auth/refreshToken`, { refreshToken: token });
    return response.data; // New AccessToken
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    const accessToken = localStorage.getItem('accessToken');
    await axios.delete(`${API_URL}/auth/logout`,{
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log("logged out successfully")
  } catch (error) {
    throw error;
  }
};
