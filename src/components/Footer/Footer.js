import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { ImFacebook2, ImYoutube, ImTwitter,ImInstagram } from 'react-icons/im';
import { MdCall,MdEmail,MdLocationOn } from 'react-icons/md';





function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the newsletter to receive our best deals
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                    <form className="d-flex">
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                        />
                        <div className="pt-2 sub-btn">Subscribe</div>
                    </form>
                </div>
            </section>
            <div className='footer-links d-flex row'>

                <div className='footer-link-items col'>
                    <h2><b>ABOUT US</b></h2>
                    <Link to='/'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
                <div className='footer-link-items col'>
                    <h2><b>REACH US</b></h2>
                    <p> <MdCall/> <span style={{color:'red'}}>842-9357-874</span></p>
                    <p> <MdLocationOn/> <span style={{color:'white'}}>123, Bangla Bazar, Dhaka, Bangladesh</span></p>
                    <p> <MdEmail/> <span style={{color:'red'}}>srrohan333@gmail.com</span></p>
                </div>

                <div className='footer-link-items col'>
                    <h2><b>VIDEOS</b></h2>
                    <Link to='/'>Submit Video</Link>
                    <Link to='/'>Ambassadors</Link>
                    <Link to='/'>Agency</Link>
                    <Link to='/'>Influencer</Link>
                </div>
                <div className='footer-link-items col'>
                    <h2><b>FOLLOW US</b></h2>
                    <div className="d-flex mt-2">
                        <ImFacebook2 style={{ fontSize: '25px', color: "skyblue",marginRight:'5px' }} />
                        <ImTwitter style={{ fontSize: '25px', color: "skyblue",marginRight:'5px' }} />
                        <ImYoutube style={{ fontSize: '30px', color: "skyblue" ,marginRight:'7px' }} />
                        <ImInstagram style={{ fontSize: '25px', color: "skyblue"}} />
                    </div>
                </div>
            </div>
            <p style={{ color: "grey" }}><small>BrushBros © 2021. All rights reserved</small></p>
        </div>
    );
}

export default Footer;