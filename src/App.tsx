import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './MainRoutes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <MainRoutes />
      </div>
    </BrowserRouter>
  );
}


export default App;
