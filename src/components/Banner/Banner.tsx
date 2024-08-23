import React from 'react';
import './Banner.css';
const Banner: React.FC = () => {


  return (
    <div className="banner">
      <div className="banner_child">
        <h1>Save your data<br /> storage here.</h1>
        <p className="banner_p">
          Data Warehouse is a data storage area that has been tested for security,
          so you can store your data here safely but not be afraid of being stolen by others.
        </p>
        <button className="banner_button">Learn more</button>
      </div>
      
      <div className="banner_img">
        <img src="https://warehouse-blue.vercel.app/static/media/hero-img.d06ff33bd5f804baba29.png" alt="illustration" />
      </div>
    </div>
  
  );
}

export default Banner;
