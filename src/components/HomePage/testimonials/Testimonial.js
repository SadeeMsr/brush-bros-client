import React,{useState,useEffect} from 'react';
import './Testimonial.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import TestimonialCard from './testimonialCard/TestimonialCard';

const Testimonial = () => {

    const [reviewerInfo, setReviewerInfo] = useState([]);

    useEffect(() => {
        fetch('https://fierce-sea-48580.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviewerInfo(data))
    }, [])

    return (
        <div className="text-center testimonial-sec">
            <h6 style={{ color: 'goldenrod',paddingTop:"50px" }}>Testimonials</h6>
            <h3 style={{ color: 'white', fontSize: '40px' }}><b>CUSTOMER REVIEW</b></h3>
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={3000}
            >
                {
                    reviewerInfo.map(pd=><TestimonialCard info={pd} key={pd._id}></TestimonialCard>)
                }

            </Carousel>
        </div>
    );
};

export default Testimonial;