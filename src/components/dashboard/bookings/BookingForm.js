import React from 'react';

import './BookingForm.css'
import Stripe from '../../paymentGateway/Stripe';


const BookingForm = () => {
   
    return (
        <div className="row">
            <div>
                <form action="">
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                </form>
            </div>
            <h2>Pay Here</h2>
            <Stripe></Stripe>
        </div>
    );
};

export default BookingForm;