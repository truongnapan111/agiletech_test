import React, { useEffect, useState } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/authService';

const Header: React.FC = () => {
  const [user, setUser] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    console.log(token)
    if (token) {
      setUser(token); // Có thể cập nhật thành thông tin người dùng cụ thể hơn
    }
    
  }, []);
  const handleLogout = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      if (refreshToken) {
        await logout();
      }
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      setUser(null);
      navigate('/');
    }
  }; 
  
  return (
    <header>
      <nav>
        <div className="logo">
          <svg width="49" height="36" viewBox="0 0 49 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="15.8323" width="19.8758" height="19.8758" rx="9.93789" fill="#9C69E2"/>
            <rect x="28.8203" y="0.925446" width="19.8758" height="34.7826" rx="9.93789" fill="#F063B8"/>
          </svg>
        </div>
        {user ? <div className='menu_btn'>
                  <a href="/profile" className='sign-in' >Profile</a>
                  <button onClick={handleLogout}>Log Out</button>
                </div> : <button className='troll'><a href='/sign_in'>Sign In</a></button>}
      </nav>
    </header>
  );
}

export default Header;
