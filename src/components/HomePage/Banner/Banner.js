import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <main style={{ height: '600px' }} className="row d-flex align-items-center">
                <div className="col-md-8 col-12 offset-md-1">
                    <h1 className="BannerHeading"><b>HOME IMPROVEMENT <br /> JUST GOT EASIER</b></h1>
                    <br/>
                    <h2 style={{ color: 'white' }}>SERVICE YOU CAN TRUST</h2>
                    <br/>
                    <Link to="/bookings"><button className=" btn-primary">GET APPOINTMENT</button></Link>
                </div>
            </main>
        </div>
    );
};

export default Banner;