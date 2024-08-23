import React, { useState } from 'react';
import './SignIn.css'; // Import the CSS file for styling
import { handleLogin } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
const SignIn: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const nav = useNavigate();
  return (
    <div className="signin-container">
      <div className="logoo">
        <svg width="49" height="36" viewBox="0 0 49 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="15.8323" width="19.8758" height="19.8758" rx="9.93789" fill="#9C69E2"/>
          <rect x="28.8203" y="0.925446" width="19.8758" height="34.7826" rx="9.93789" fill="#F063B8"/>
        </svg>

      </div>
      <h1 className="signin-title">Sign In</h1>
      <form className="signin-form" onSubmit={handleLogin(username,nav)} >
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          id="username" 
          name="username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <button type="submit" className="signin-button">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;