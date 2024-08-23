import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import Profile from './pages/Profile/Profile';

const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign_in" element={<SignIn />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default MainRoutes;
