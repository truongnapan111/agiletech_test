
import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Features from '../../components/Features/Features';
import Testimonials from '../../components/Testimonials/Testimonials';
import Footer from '../../components/Footer/Footer';
import '../Home/Home.css'
import setupInterceptors from '../../stores/authInterceptor';
const Home: React.FC = () => {
    useEffect(() => {
        setupInterceptors();
      }, []);
    return (
        <div className='main'>
            <Header/>
            <Banner/>
            <Features/>
            <Testimonials/>
            <Footer/>
        </div>
    )
}
export default Home;