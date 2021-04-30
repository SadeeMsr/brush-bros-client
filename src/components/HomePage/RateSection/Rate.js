import React from 'react';
import PriceCard from './priceCard/PriceCard';
import './rate.css';

const Rate = () => {
    const priceInfo = [
        {
            id: 1,
            price: 40,
            workTime: '0-60 MINS',
            time: 'Per hour'
        },
        {
            id: 1,
            price: 60,
            workTime: '60 + MINS',
            time: 'Per 30 min'
        },
        {
            id: 1,
            price: 80,
            workTime: 'WEEKDAYS',
            time: 'Per day'
        },
        {
            id: 1,
            price: 100,
            workTime: 'WEEKENDS',
            time: 'Per day'
        }
    ]

    return (
        <div className="Rate-section">
            <div className="Rate-content pb-5">
                <h6 style={{ color: 'goldenrod' }}>Prices</h6>
                <h3 style={{ color: 'rgb(56, 29, 29)', fontSize: '40px' }}><b>OUR RATES</b></h3>
                <div className="d-flex justify-content-center">
                    <div className="card-section container mt-2 ps-5">
                        {
                            priceInfo.map(pd => <PriceCard prices={pd} key={pd.id}></PriceCard>)
                        }
                    </div>
                </div>
                <p style={{ color: 'rgb(77, 73, 73)',fontSize:'20px' }}>Tasks range from minor to major, from unskilled to highly skilled, and <br/> include different types of jobs & payments.</p>
            </div>
        </div>
    );
};

export default Rate;