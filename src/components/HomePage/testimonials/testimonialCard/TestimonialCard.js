import React from 'react';
import user from '../../../../images/user.png'

const TestimonialCard = (props) => {

    const {personName,designation,review}=props.info;

    return (
        <div>
            <img src={user} alt='user' />
            <div className="myCarousel">
                <h3>{personName}</h3>
                <h4>{designation}</h4>
                <p>
                    {review}
                </p>
            </div>
        </div>
    );
};

export default TestimonialCard;