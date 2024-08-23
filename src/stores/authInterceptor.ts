import axios from 'axios';
import { refreshToken } from '../services/authService';

const setupInterceptors = () => {
    axios.interceptors.request.use(
      async (config) => {
        let token = localStorage.getItem('accessToken');
        const expiryDate = localStorage.getItem('accessTokenExpiry');
  
        if (expiryDate && new Date().getTime() > new Date(expiryDate).getTime()) {
          // Access Token đã hết hạn, yêu cầu một cái mới
          const refreshTokenValue = localStorage.getItem('refreshToken');
  
          if (refreshTokenValue) {
            const newTokenData = await refreshToken(refreshTokenValue);
            token = newTokenData.accessToken;
  
            // Kiểm tra xem token có giá trị hợp lệ không
            if (token) {
              localStorage.setItem('accessToken', token);
              localStorage.setItem('accessTokenExpiry', new Date(new Date().getTime() + 60 * 1000).toString()); // Cập nhật thời gian hết hạn
            }
          }
        }
  
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  };
  
  export default setupInterceptors;
