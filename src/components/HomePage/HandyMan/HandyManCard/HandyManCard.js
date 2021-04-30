import React from 'react';
import { ImFacebook2, ImYoutube, ImTwitter, ImInstagram } from 'react-icons/im';









const HandyManCard = (props) => {
    const { Name, job, manIMG } = props.info;

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
                <div className="picture">
                    <img className="img-fluid" src={manIMG} alt="user" />
                </div>
                <div className="team-content">
                    <h3 className="name">{Name}</h3>
                    <h4 className="title">{job}</h4>
                </div>
                <ul className="social">
                    <li><ImFacebook2 /></li>
                    <li><ImInstagram className="ms-2" /></li>
                    <li><ImYoutube className="ms-2" /></li>
                    <li><ImTwitter className="ms-2" /></li>
                </ul>
            </div>
        </div>
    );
};

export default HandyManCard;