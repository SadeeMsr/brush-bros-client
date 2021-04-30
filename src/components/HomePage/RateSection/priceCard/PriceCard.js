import React from 'react';
import './PriceCard.css'

const PriceCard = (props) => {
    const {price,workTime,time} = props.prices;
    return (
        <div>
            <div className="rating-card">
                <div className="rating-container container mb-3">
                    <h4>{workTime}</h4>
                </div>
                    <h3>$ <span style={{fontSize:"40px"}}><b>{price}</b></span></h3>
                    <h6 style={{color:'grey'}}>{time}</h6>
            </div>
        </div>
    );
};

export default PriceCard;