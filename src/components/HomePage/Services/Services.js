import React, { useEffect, useState } from 'react';
import './Services.css';
import ServiceCard from './serviceCard/ServiceCard';
import Spinner from 'react-bootstrap/Spinner';

const Services = () => {
    const [servicesInfo, setServicesInfo] = useState([]);

    useEffect(() => {
        fetch('https://fierce-sea-48580.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServicesInfo(data))
    }, [])

    return (
        <div className="service-section">
            <div className="service-content">
                <h6 style={{ color: 'goldenrod' }}>SERVICES</h6>
                <h1 style={{ color: 'whitesmoke' }}>CHOOSE YOUR PROJECTS</h1>
                {
                    servicesInfo.length === 0 && <div style={{ textAlign: 'center', marginTop: "100px", height: '100vh' }}><Spinner style={{ fontSize: "300px", color: "grey" }} animation="border" /></div>
                }
                <div className="card-section container mt-5 ps-5">
                    {
                        servicesInfo.map(pd => <ServiceCard serviceInfo={pd} key={pd._id}></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;