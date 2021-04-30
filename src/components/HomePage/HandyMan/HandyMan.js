import React from 'react';
import './Handyman.css';
import HandyManCard from './HandyManCard/HandyManCard'




const HandyMan = () => {

    const manInfo=[
        {
            id: 1,
            Name:"Michael Miller",
            job:"Decorator",
            manIMG:"https://www.jobhawk.co.uk/img/profile-jack.jpg"

        },
        {
            id: 2,
            Name:"Justin Ramos",
            job:"Painter",
            manIMG:"https://www.localheroes.com/staticassets/the-heroes/painter-decorator-sq.jpg"

        },
        {
            id: 3,
            Name:"Patricia Knott",
            job:"Electrician",
            manIMG:"https://p.kindpng.com/picc/s/754-7542244_manufacturing-employee-hd-png-download.png"

        },
        {
            id: 4,
            Name:"Marlo Huntley",
            job:"plumber",
            manIMG:"https://lh3.googleusercontent.com/proxy/2f30jhkKf2LxaissbQhWYctcC-PoaTbhoLuk2dEHym2PRgRxIc4HLK_XbQ79h4iuGOqraD1-A_dktgB910DByRZCMBVDA9Y3bRxkEaDnmkHbUv38qhNqLmor"

        }

    ]


    return (
        <div className="body-sec container pb-5">
            <h6 style={{ color: 'goldenrod',marginTop:'50px' }}>Team</h6>
            <h2 style={{ color: 'black' }}><b>OUR PROFESSIONAL HANDYMEN</b></h2>
            <div className="row mt-5">
                {
                    manInfo.map(pd=><HandyManCard info={pd} key={pd.id}></HandyManCard>)
                }
            </div>
        </div>
    );
};

export default HandyMan;