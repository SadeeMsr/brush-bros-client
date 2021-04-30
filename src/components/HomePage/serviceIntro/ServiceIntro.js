import React from 'react';
import './ServiceIntro.css'
import plier from '../../../images/pliers.png'
import screwDiver from '../../../images/tool.png'
import RollerBrush from '../../../images/paint-roller.png'
import Driller from '../../../images/drill.png'

const ServiceIntro = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className='w-75 p-4 row bg-light rounded-3 shadow-lg'>
                <div className="col-sm-3 introCard">
                    <img src={plier} className='img-fluid mb-3' height="70px" width="80px" alt="plier" />
                    <p>PLUMBING</p>
                </div>
                <div className="col-sm-3 introCard intro-border">
                    <img src={screwDiver} className='img-fluid mb-3' height="70px" width="80px" alt="plier" />
                    <p>ELECTRICAL</p>
                </div>
                <div className="col-sm-3 introCard intro-border">
                    <img src={RollerBrush} className='img-fluid mb-3' height="70px" width="80px" alt="plier" />
                    <p>DECORATING</p>
                </div>
                <div className="col-sm-3 introCard intro-border">
                    <img src={Driller} className='img-fluid mb-3' height="70px" width="80px" alt="plier" />
                    <p>ODD JOBS</p>
                </div>
            </div>
        </section>
    );
};

export default ServiceIntro;