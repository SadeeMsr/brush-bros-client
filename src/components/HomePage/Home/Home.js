import React from 'react';
import './Home.css';
import Header from '../../Navbar/Header';
import Banner from '../Banner/Banner';
import ServiceIntro from '../serviceIntro/ServiceIntro';
import Services from '../Services/Services';
import Rate from '../RateSection/Rate';
import Testimonial from '../testimonials/Testimonial';
import Footer from '../../Footer/Footer';
import HandyMan from '../HandyMan/HandyMan';

const Home = () => {
    return (
        <div>
            <div className="header-container">
                <Header></Header>
                <Banner></Banner>
                <ServiceIntro></ServiceIntro>
            </div>
                <Services></Services>
                <Rate></Rate>
                <Testimonial></Testimonial>
                <HandyMan></HandyMan>
                <Footer></Footer>
        </div>
    );
};

export default Home;