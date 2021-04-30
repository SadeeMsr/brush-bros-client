import React from 'react';
import './ServiceCard.css';
import { Link } from 'react-router-dom';

const ServiceCard = (props) => {
    const {serviceTittle,serviceDetail,imageURL,price} = props.serviceInfo;

    return (
        <div>
            <div className="item-card rounded">
                <img src={imageURL} className="mt-5" alt="Avatar" style={{ width: "50%" }} />
                <div className="cardInfo-container container">
                    <h4>{serviceTittle.toUpperCase()}</h4>
                    <p>{serviceDetail}</p>
                    <h6 style={{color:'goldenrod'}}>$ {price}</h6>
                    <Link to="/booking">
                        <button className="btn btn-primary w-100" >Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;